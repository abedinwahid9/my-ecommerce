import React from "react";
import Title from "../Title/Title";
import ProductCard from "../ProductCard/ProductCard";

const OurProducts = () => {
  return (
    <div className="my-10 container mx-auto">
      <Title title="our popular products" />
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 md:px-0 px-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default OurProducts;
