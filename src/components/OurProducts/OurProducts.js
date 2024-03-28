import React from "react";
import Title from "../Title/Title";
import ProductCard from "../ProductCard/ProductCard";

const OurProducts = () => {
  return (
    <div className="my-10 container mx-auto">
      <Title title="our popular products" />
      <div className="grid grid-flow-col grid-cols-4 gap-5 my-5">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default OurProducts;
