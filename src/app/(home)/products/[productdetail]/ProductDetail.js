"use client";
import OurProducts from "@/components/OurProducts/OurProducts";
import ProductDetails from "@/components/ProductsDetails/ProductDetails/ProductDetails";
import ProductDetailsSlider from "@/components/ProductsDetails/ProductDetailsSlider.js/ProductDetailsSlider";
import { productFetch } from "@/lib/redux/feature/allProducts/allProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { useEffect } from "react";

const ProductDetail = ({ params }) => {
  const { productdetail } = params;
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );
  const dispatch = useAppDispatch()
  const findItem = allProducts?.find((item) => item._id === productdetail);

  useEffect(()=>{
    dispatch(productFetch())
  },[dispatch])

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        <ProductDetailsSlider findItem={findItem} isLoading={isLoading} />
        <ProductDetails findItem={findItem} isLoading={isLoading} />
      </div>
      <OurProducts />
    </>
  );
};

export default ProductDetail;
