"use client";

import { useState } from "react";

const ProductDetails = () => {
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
    <div className="flex flex-col gap-3">
      <div className="flex flex-col  gap-3 h-1/2">
        <h3 className="text-2xl font-bold dark:text-secondaryColor uppercase">
          products name
        </h3>
        <hr />
        <p className="text-base  dark:text-secondaryColor ">
          Products details Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Ullam, excepturi.
        </p>
        <p className="text-base font-bold dark:text-secondaryColor">
          Price: 350
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 ">
          <button
            disabled={stock === 0}
            onClick={handleDecrement}
            className="bg-optionalColor disabled:opacity-75 text-2xl font-bold w-10 h-10 disabled"
          >
            -
          </button>
          <input
            disabled
            onChange={handleInput}
            className="w-10 h-10 text-center focus:outline-none disabled:bg-white"
            type="number"
            name=""
            id=""
            value={input}
          />
          <button
            disabled={stock === 0}
            onClick={handleIncrement}
            className="bg-optionalColor disabled:opacity-75 text-2xl font-bold w-10 h-10"
          >
            +
          </button>
        </div>
        <div>
          <p className="text-base font-bold dark:text-secondaryColor">
            Totol Price: {350 * input}
          </p>
          <strong
            className={`${stock > 0 ? "text-secondaryColor" : "text-red-900"} `}
          >
            stock : {stock > 0 ? stock : "Out"}
          </strong>
        </div>
      </div>
      <button
        disabled={stock === 0}
        className="bg-secondaryColor disabled:opacity-75 rounded-sm uppercase text-optionalColor hover:text-secondaryColor font-bold py-3 hover:bg-optionalColor transition-all "
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
