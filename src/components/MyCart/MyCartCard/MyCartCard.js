"use client";
import Image from "next/image";
import singlePic from "@/assets/pickle.jpg";
import { useState } from "react";
import { MdDelete } from "react-icons/md";

const MyCartCard = () => {
  const [input, setInput] = useState(1);
  const stock = 6;

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleIncrement = () => {
    if (input < stock) {
      setInput(input + 1);
    }
  };

  const handleDecrement = () => {
    if (input > 1) {
      setInput(input - 1);
    }
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
              products name
            </h3>

            <p className="md:text-base text-sm font-bold dark:text-secondaryColor">
              Price: 350
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
              onChange={handleInput}
              className="md:w-10 md:h-10 w-7 h-7 text-center focus:outline-none disabled:bg-white"
              type="number"
              name=""
              id=""
              value={input}
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
          Totol Price: {350 * input}
        </p>{" "}
        <MdDelete className="w-7 h-7 cursor-pointer" />
      </div>
    </div>
  );
};

export default MyCartCard;
