import ProductCard from "@/components/ProductCard/ProductCard";
import Searchbar from "@/components/Searchbar/Searchbar";
import TabComponent from "@/components/TabComponent/TabComponent";
import Title from "@/components/Title/Title";

const page = () => {
  const productDatas = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="my-10 mx-auto container">
      <Title title="all categories" />
      <div className="flex">
        <TabComponent />
        <Searchbar />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-10 gap-5">
        {productDatas.map((productData, i) => {
          return <ProductCard productData={productData} key={i} />;
        })}
      </div>
    </div>
  );
};

export default page;
