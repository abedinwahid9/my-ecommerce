"use client";
import CloseButton from "@/components/Share/CloseButton/CloseButton";
import Title from "@/components/Share/Title/Title";
import { useState } from "react";

const UpdateModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const handleModal = () => {
    setModalOpen(false);
  };

  return (
    <div
      className={`${
        modalOpen ? "flex" : "hidden"
      } absolute  top-0 w-full h-full  justify-center bg-blue-gray-500 bg-opacity-40 items-center `}
    >
      <div className="w-[500px] h-[300px] bg-blue-gray-500 relative flex rounded-lg p-5 items-center justify-center">
        <Title title="update products" />
        <hr />
        <div onClick={handleModal} className="absolute top-2 right-2">
          <CloseButton />
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
