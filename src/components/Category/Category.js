import React from "react";
import Title from "../Share/Title/Title";
import single from "../../assets/categories/single.jpg";
import packageImg from "../../assets/categories/package.jpg";
import Image from "next/image";
import "./category.css";

const Category = () => {
  return (
    <div className="container mx-auto">
      <Title title="our categories"></Title>
      <div className="flex my-6 justify-between gap-10 md:flex-row flex-col items-center">
        <div className="md:w-[380px] w-[300px] h-[200px] relative drop-shadow-2xl animation overflow-hidden">
          <Image
            className="w-full h-full object-fill img"
            width={0}
            height={0}
            src={single}
            alt="category"
          />
          <div className="absolute top-0 w-full h-full flex items-center ml-5">
            <h2 className=" text-2xl uppercase font-bold">pickle jar</h2>
          </div>
        </div>
        <div className="md:w-[380px] w-[300px] h-[200px] relative drop-shadow-2xl animation overflow-hidden">
          <Image
            className="w-full h-full object-fill img"
            width={0}
            height={0}
            src={packageImg}
            alt="category"
          />
          <div className="absolute top-0 w-full h-full flex items-center ml-5">
            <h2 className=" text-2xl uppercase font-bold">pickle package</h2>
          </div>
        </div>
        <div className="md:w-[380px] w-[300px] h-[200px] relative drop-shadow-2xl animation overflow-hidden">
          <Image
            className="w-full h-full object-fill img"
            width={0}
            height={0}
            src={single}
            alt="category"
          />
          <div className="absolute top-0 w-full h-full flex items-center ml-5">
            <h2 className=" text-2xl uppercase font-bold">upcoming...</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
