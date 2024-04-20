import ProductDetail from "./ProductDetail";

const page = ({ params }) => {
  return (
    <div className="container mx-auto my-10 px-5">
      <ProductDetail params={params} />
    </div>
  );
};

export default page;
