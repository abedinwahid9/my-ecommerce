"use client";
import Title from "../Share/Title/Title";
import "./category.css";
import { useEffect } from "react";
import { categoryDatas } from "@/lib/redux/feature/allCategory/allCategorySlice";
import ImageComponent from "../Share/Image/ImageComponent";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";

const Category = () => {
  const dispatch = useAppDispatch();
  const { isloading, categories, error } = useAppSelector(
    (state) => state.allCategories
  );

  useEffect(() => {
    dispatch(categoryDatas());
  }, [dispatch]);

  return (
    <div className="container mx-auto">
      <Title title="our categories"></Title>
      <div className="flex my-6 justify-between gap-10 md:flex-row flex-col items-center">
        {categories?.map((category) => {
          return (
            <div
              key={category._id}
              className="md:w-[380px] w-[300px] h-[200px] relative drop-shadow-2xl animation overflow-hidden"
            >
              <ImageComponent
                src={category.imgData[0]}
                className="w-full h-full object-fill img"
              />

              <div className="absolute top-0 w-full h-full flex items-center ml-5">
                <h2 className=" text-2xl uppercase font-bold">
                  {category.categoryName}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
