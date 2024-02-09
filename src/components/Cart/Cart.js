"use client";
import Lottie from "lottie-react";
import cart from "./cart.json";
import { Badge } from "flowbite-react";

const Cart = () => {
  return (
    <div className="relative w-14 h-14">
      <Lottie animationData={cart} loop={true} />
      <Badge
        className="absolute -top-1 rounded-full -right-1 bg-red-700 text-white "
        size="sm"
      >
        5
      </Badge>
    </div>
  );
};

export default Cart;
