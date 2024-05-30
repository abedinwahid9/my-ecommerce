"use client";
import { useEffect, useState } from "react";
import CloseButton from "@/components/Share/CloseButton/CloseButton";
import Title from "@/components/Share/Title/Title";
import "./updateModal.css";

const UpdateModal = ({ handleModal, modalOpen }) => {
  const [isVisible, setIsVisible] = useState(modalOpen);

  useEffect(() => {
    if (modalOpen) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen]);

  if (!isVisible) return null;

  return (
    <div
      className={`${
        modalOpen ? "flex" : "animatedOut flex"
      } absolute top-0 w-full h-full justify-center bg-blue-gray-500 bg-opacity-40 items-center`}
    >
      <div className="w-[500px] h-[300px] animated bg-blue-gray-500 relative flex rounded-lg p-5 items-center justify-center">
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
