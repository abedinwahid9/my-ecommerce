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
            Total Cart Items: 6
          </h3>
          <div className="  flex flex-col gap-5">
            <MyCartCard />
            <MyCartCard />
            <MyCartCard />
            <MyCartCard />
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
                      ৳ 200
                    </p>
                    <p className="text-base capitalize font-semibold dark:text-secondaryColor">
                      ৳ 300
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
                  ৳ 600
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
