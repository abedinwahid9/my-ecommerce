import { useState } from "react";

const ProductDetails = ({ findItem, isLoading }) => {
  const [input, setInput] = useState(1);

  // Check if allProducts is loading or empty
  if (isLoading) {
    return <p>Loading...</p>;
  }

  // Check if findItem is undefined
  if (!findItem) {
    return <p>Product not found</p>;
  }

  const { productName, itemDescription, price, stock, imgData } = findItem;

  const totalPrice = price * input;

  const handleCart = () => {
    dispatched(addCart({ totalPrice, quantity: input, ...findItem }));
  };

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
      <div className="flex flex-col gap-3 h-1/2">
        <h3 className="text-2xl font-bold dark:text-secondaryColor uppercase">
          {productName}
        </h3>
        <hr />
        <p className="text-base dark:text-secondaryColor">{itemDescription}</p>
        <p className="text-base font-bold dark:text-secondaryColor">
          Price: {price} ৳
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
            Total Price: {totalPrice}
          </p>
          <strong
            className={`${stock > 0 ? "text-secondaryColor" : "text-red-900"} `}
          >
            Stock: {stock > 0 ? stock : "Out"}
          </strong>
        </div>
      </div>
      <button
        onClick={handleCart}
        disabled={stock === 0}
        className="bg-secondaryColor disabled:opacity-75 rounded-sm uppercase text-optionalColor hover:text-secondaryColor font-bold py-3 hover:bg-optionalColor transition-all"
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
