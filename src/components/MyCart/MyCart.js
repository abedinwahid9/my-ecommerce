"use client";
import Lottie from "lottie-react";
import mycart from "./mycart.json";
import Title from "../Share/Title/Title";
import MyCartCard from "./MyCartCard/MyCartCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTotal } from "@/lib/redux/feature/cartItem/cartItemSlice";

const MyCart = () => {
  const allCartProducts = useSelector((state) => state.carts.cart);
  const grandTotal = useSelector((state) => state.carts.grandTotalPrice);
  const [deliverCharge, setDeliverCharge] = useState(300);

  const dispatched = useDispatch();

  useEffect(() => {
    dispatched(getTotal());
  }, [allCartProducts]);

  return (
    <>
      <div className="flex justify-center items-center">
        <Title title="my" />
        <Lottie
          className="md:w-24 md:h-24 w-16 h-16"
          animationData={mycart}
          loop={true}
        />
        <Title title="cart" />
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:my-10 my-5 ">
        <div className="md:w-2/3 w-full">
          <h3 className="my-3 font-lobsterTwo font-semibold text-xl dark:text-secondaryColor">
            Total Cart Items: {allCartProducts.length}
          </h3>
          <div className="flex flex-col gap-5">
            {allCartProducts.length === 0 ? (
              <div className="flex my-5">
                <h2 className="text-2xl font-bold font-lobsterTwo uppercase text-red-500">
                  no cart products
                </h2>
              </div>
            ) : (
              allCartProducts.map((product, i) => {
                return <MyCartCard product={product} key={i} />;
              })
            )}
          </div>
        </div>
        <div className="md:w-1/3 w-full ">
          <h3 className="my-3 uppercase text-center font-lobsterTwo font-semibold text-xl dark:text-secondaryColor">
            order summery
          </h3>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="flex justify-between">
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                      Sub Total:
                    </p>
                    <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                      delivery Charge:
                    </p>
                  </div>
                </div>
                <div>
                  <div>
                    <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                      ৳ {grandTotal}
                    </p>
                    <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                      ৳ {deliverCharge}
                    </p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="flex justify-between">
                <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                  Total:
                </p>
                <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                  ৳ {grandTotal + deliverCharge}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <button className="text-lg py-2 rounded-sm px-4 bg-optionalColor font-semibold uppercase">
                continue shopping
              </button>
              <button className="text-lg py-2 rounded-sm px-4 bg-red-500 font-semibold uppercase">
                cancle
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyCart;
