"use client";
import Lottie from "lottie-react";
import cart from "./cart.json";
import { Badge } from "flowbite-react";

const Cart = () => {
  return (
    <div className="relative w-12 h-12">
      <Lottie animationData={cart} loop={true} />
      <div class="absolute inline-flex items-center justify-center w-8 h-8 text-base text-center font-bold text-white bg-red-500  rounded-full -top-2 -end-2 dark:border-gray-900">10</div>
    </div>
  );
};

export default Cart;
