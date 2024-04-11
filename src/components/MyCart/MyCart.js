"use client";
import Lottie from "lottie-react";
import mycart from "./mycart.json";
import Title from "../Title/Title";
import MyCartCard from "./MyCartCard/MyCartCard";

const MyCart = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Title title="my" />
        <Lottie className="w-24 h-24" animationData={mycart} loop={true} />
        <Title title="cart" />
      </div>
      <div>
        <MyCartCard />
      </div>
    </>
  );
};

export default MyCart;
