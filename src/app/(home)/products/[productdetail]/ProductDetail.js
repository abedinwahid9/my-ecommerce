"use client";
import OurProducts from "@/components/OurProducts/OurProducts";
import ProductDetails from "@/components/ProductsDetails/ProductDetails/ProductDetails";
import ProductDetailsSlider from "@/components/ProductsDetails/ProductDetailsSlider.js/ProductDetailsSlider";
import { useAppSelector } from "@/lib/redux/hooks/hooks";

const ProductDetail = ({ params }) => {
  const { productdetail } = params;
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );
  const findItem = allProducts?.find((item) => item._id === productdetail);

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
