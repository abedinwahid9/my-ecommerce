"use client";
import Table from "@/components/DashBoard/Table/Table";
import { productFetch } from "@/lib/redux/feature/allProducts/allProductsSlice";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { useEffect } from "react";

const AllProducts = () => {
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(productFetch());
  }, [dispatch]);

  const tableHead = [
    "product",
    "imgData",
    "category",
    "stock",
    "price",
    "edit / delete",
  ];

  return (
    <>
      <Table tableHead={tableHead} isLoading={isLoading} data={allProducts} />
    </>
  );
};

export default AllProducts;
