"use client";
import React from "react";
import Title from "../Share/Title/Title";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const OurProducts = () => {
  const allProducts = useSelector((state) => state.allProducts);
  return (
    <div className="my-10 container mx-auto">
      <Title title="our popular products" />
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 md:px-0 px-5">
        {allProducts.slice(0, 4).map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </div>
  );
};

export default OurProducts;
