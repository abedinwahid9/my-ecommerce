import React from "react";

const Title = ({ title }) => {
  return (
    <div>
      <h2 className=" font-lobsterTwo font-bold md:text-3xl text-xl text-secondaryColor uppercase text-center">
        {title}
      </h2>
    </div>
  );
};

export default Title;
