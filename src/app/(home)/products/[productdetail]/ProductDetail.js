"use client";
import OurProducts from "@/components/OurProducts/OurProducts";
import ProductDetails from "@/components/ProductsDetails/ProductDetails/ProductDetails";
import ProductDetailsSlider from "@/components/ProductsDetails/ProductDetailsSlider.js/ProductDetailsSlider";
import { useSelector } from "react-redux";

const ProductDetail = ({ params }) => {
  const allProducts = useSelector((state) => state.allProducts);

  const findItem = allProducts.find(
    (item) => item.id === +params.productdetail
  );
  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        <ProductDetailsSlider />
        <ProductDetails findItem={findItem} />
      </div>
      <OurProducts />
    </>
  );
};

export default ProductDetail;
