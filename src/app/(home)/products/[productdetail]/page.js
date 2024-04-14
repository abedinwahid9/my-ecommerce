import OurProducts from "@/components/OurProducts/OurProducts";
import ProductDetails from "@/components/ProductsDetails/ProductDetails/ProductDetails";
import ProductDetailsSlider from "@/components/ProductsDetails/ProductDetailsSlider.js/ProductDetailsSlider";

const page = ({ params }) => {
  return (
    <div className="container mx-auto my-10 px-5">
      <h2>products {params.productdetail}</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <ProductDetailsSlider />
        <ProductDetails />
      </div>
      <OurProducts />
    </div>
  );
};

export default page;
