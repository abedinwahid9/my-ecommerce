"use client";
import ProductCard from "@/components/ProductCard/ProductCard";
import Searchbar from "@/components/Searchbar/Searchbar";
import TabComponent from "@/components/TabComponent/TabComponent";
import Title from "@/components/Share/Title/Title";
import { useState } from "react";
import { useSelector } from "react-redux";

const AllCategories = () => {
  const allProducts = useSelector((state) => state.allProducts);
  const [activeTab, setActiveTab] = useState("pickle jar");
  const data = [
    {
      label: "pickle jar",
      value: "pickle jar",
    },
    {
      label: "pickle package",
      value: "pickle package",
    },
  ];
  return (
    <>
      <Title title="all categories" />
      <div className="flex md:flex-row flex-col gap-5 my-10">
        <TabComponent
          data={data}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <Searchbar />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-10 gap-5">
        {allProducts.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </>
  );
};

export default AllCategories;
