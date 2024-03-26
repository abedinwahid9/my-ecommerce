import React from "react";
import Title from "../Title/Title";
import single from "../../assets/categories/single.jpg";
import packageImg from "../../assets/categories/package.jpg";

const Category = () => {
  return (
    <div className="container mx-auto">
      <Title title="our categories"></Title>
      <div className="flex">
        <div className="relative inline-block w-[350px] h-[200px] rounded-full">
          <div
            style={{
              backgroundImage: `url(${single.src})`,
              backgroundSize: "100% 100%",
            }}
            className="w-full h-full bg-center  bg-no-repeat "
          ></div>
          <h2 className="text-center absolute  w-full h-full top-0 flex  items-center text-3xl uppercase font-semibold text-secondaryColor">
            all items
          </h2>
        </div>
        <div className="relative inline-block w-[200px] h-[70px] rounded-full">
          <div
            style={{
              backgroundImage: `url(${packageImg.src})`,
              backgroundSize: "100% 100%",
            }}
            className="w-full h-full bg-center  bg-no-repeat "
          ></div>
          <h2 className="text-center absolute  w-full h-full top-0 flex justify-center items-center text-3xl uppercase font-semibold text-secondaryColor">
            all items
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Category;
