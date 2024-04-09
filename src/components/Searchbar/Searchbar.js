import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  return (
    <div className="bg-secondaryColor md:w-1/3 w-full flex  px-3 py-2 rounded-lg items-center">
      <input
        className="bg-transparent w-full focus:outline-none text-lg text-white"
        type="text"
        name=""
        id=""
        placeholder="search..."
      />
      <CiSearch className="text-3xl text-white text-center" />
    </div>
  );
};

export default Searchbar;
