import ProductCard from "@/components/ProductCard/ProductCard";
import Title from "@/components/Title/Title";
import React from "react";

const page = () => {
  return (
    <div className="my-10 mx-auto container">
      <Title title="all categories" />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1  my-10 gap-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default page;
