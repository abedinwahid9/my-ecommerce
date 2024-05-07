import React from "react";

const NoItemFound = ({ text }) => {
  return (
    <div className="flex my-5">
      <h2 className="text-2xl font-bold font-lobsterTwo uppercase text-red-500">
        {text}
      </h2>
    </div>
  );
};

export default NoItemFound;
