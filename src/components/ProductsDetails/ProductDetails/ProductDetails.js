const ProductDetails = () => {
  const stock = 6;
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
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2 ">
          <button className="bg-optionalColor text-2xl font-bold w-10 h-10">
            -
          </button>
          <input
            className="w-10 h-10 text-center focus:outline-none"
            type="number"
            name=""
            id=""
            value="1"
          />
          <button className="bg-optionalColor text-2xl font-bold w-10 h-10">
            +
          </button>
        </div>
        <strong
          className={`${stock > 0 ? "text-secondaryColor" : "text-red-900"} `}
        >
          stock : {stock > 0 ? stock : "Out"}
        </strong>
      </div>
      <button className="bg-secondaryColor rounded-sm uppercase text-optionalColor hover:text-secondaryColor font-bold py-3 hover:bg-optionalColor transition-all ">
        Add to cart
      </button>
    </div>
  );
};

export default ProductDetails;
