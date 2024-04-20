"use client";
import Lottie from "lottie-react";
import cart from "./cart.json";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItem = useSelector((state) => state.carts.cart);
  const message = useSelector((state) => state.carts.message);

  console.log(message);

  return (
    <div className="relative w-12 h-12">
      <Lottie animationData={cart} loop={true} />
      <div className="absolute inline-flex items-center justify-center w-8 h-8 text-base text-center font-bold text-white bg-red-500  rounded-full -top-2 -end-2 dark:border-gray-900">
        {cartItem.length}
      </div>
      {/* {message === true ? (
        <div className="absolute top-0 left-0 bg-red-600 ">
          <h2>already add this products</h2>
        </div>
      ) : (
        ""
      )} */}
    </div>
  );
};

export default Cart;
