"use client";
import React, { useEffect } from "react";
import Title from "../Share/Title/Title";
import ProductCard from "../ProductCard/ProductCard";
import { productFetch } from "@/lib/redux/feature/allProducts/allProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";

const OurProducts = () => {
  const dispatch = useAppDispatch();
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );

  useEffect(() => {
    dispatch(productFetch());
  }, [dispatch]);
  if (isLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="my-10 container mx-auto">
      <Title title="our popular products" />
      <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-5 md:px-0 px-5">
        {allProducts?.slice(0, 4)?.map((product, i) => {
          return <ProductCard product={product} key={i} />;
        })}
      </div>
    </div>
  );
};

export default OurProducts;
