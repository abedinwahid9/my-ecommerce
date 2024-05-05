"use client";
import Image from "next/image";
import singlePic from "@/assets/pickle.jpg";

import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  cartQuantityDecrement,
  cartQuantityIncrement,
  getTotal,
  removeCart,
} from "@/lib/redux/feature/cartItem/cartItemSlice";
import DeleteBtn from "@/components/Share/DeleteBtn/DeleteBtn";

const MyCartCard = ({ product }) => {
  const { id, name, stock, quantity, price } = product;

  const dispatched = useDispatch();

  const handleIncrement = () => {
    dispatched(cartQuantityIncrement(id));
  };

  const handleDecrement = () => {
    dispatched(cartQuantityDecrement(id));
  };

  return (
    <div className="flex justify-between flex-col gap-3 md:flex-row drop-shadow-sm  border-2  p-5 ">
      <div className="flex gap-5">
        <Image
          className="md:w-32 w-20 md:h-32 h-20 rounded-sm object-cover"
          src={singlePic}
          width={0}
          height={0}
          alt="mycartimg"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="md:text-xl text-sm font-bold dark:text-secondaryColor uppercase">
              {name}
            </h3>

            <p className="md:text-base text-sm font-bold dark:text-secondaryColor">
              Price: {price}
            </p>
          </div>
          <div className="flex gap-2 ">
            <button
              disabled={stock === 0}
              onClick={handleDecrement}
              className="bg-optionalColor disabled:opacity-75 md:text-2xl text-lg font-bold md:w-10 md:h-10 w-7 h-7 disabled"
            >
              -
            </button>
            <input
              disabled
              // onChange={handleInput}
              className="md:w-10 md:h-10 w-7 h-7 text-center focus:outline-none disabled:bg-white"
              type="number"
              name=""
              id=""
              value={quantity}
            />
            <button
              disabled={stock === 0}
              onClick={handleIncrement}
              className="bg-optionalColor disabled:opacity-75 md:text-2xl text-lg font-bold md:w-10 md:h-10 w-7 h-7"
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex md:flex-col flex-row justify-between md:items-end items-start">
        <p className="text-base font-bold dark:text-secondaryColor">
          Totol Price: {price * quantity}
        </p>
        <div onClick={() => dispatched(removeCart(id))}>
          {" "}
          <DeleteBtn />
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
