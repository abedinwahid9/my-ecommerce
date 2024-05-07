"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import Searchbar from "@/components/Searchbar/Searchbar";
import TabComponent from "@/components/TabComponent/TabComponent";
import Title from "@/components/Share/Title/Title";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categoryDatas } from "@/lib/redux/feature/allCategory/allCategorySlice";
import NoItemFound from "@/components/Share/NoItemFound/NoItemFound";

const AllCategories = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const [activeTab, setActiveTab] = useState("single");

  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.allCategories);

  useEffect(() => {
    dispatch(categoryDatas());
  }, [dispatch]);

  const datas = allProducts?.filter(
    (product) => product.category === activeTab
  );

  return (
    <>
      <Title title="all categories" />
      <div className="flex md:flex-row flex-col gap-5 my-10">
        <TabComponent
          data={categories}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Searchbar />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-10 gap-5">
        {datas?.length === 0 ? (
          <NoItemFound text="No Item found" />
        ) : (
          datas?.map((product, i) => {
            return <ProductCard product={product} key={i} />;
          })
        )}
      </div>
    </>
  );
};

export default AllCategories;
