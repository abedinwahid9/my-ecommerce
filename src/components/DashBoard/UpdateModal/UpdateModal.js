"use client";
import { useEffect, useState } from "react";
import CloseButton from "@/components/Share/CloseButton/CloseButton";
import Title from "@/components/Share/Title/Title";
import "./updateModal.css";
import InputField from "@/components/Share/Input/InputField";
import { useForm } from "react-hook-form";
import Button from "@/components/Share/Button/Button";
import { useAppDispatch, useAppSelector } from "@/lib/redux/hooks/hooks";
import { productFetch } from "@/lib/redux/feature/allProducts/allProductsSlice";
import axios from "axios";

const UpdateModal = ({ handleModal, modalOpen, modalData, setModalOpen }) => {
  const [isVisible, setIsVisible] = useState(modalOpen);
  const { register, handleSubmit, reset } = useForm();
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );
  const filterData = allProducts?.filter((data) => data._id === modalData);
  useEffect(() => {
    if (modalOpen) {
      setIsVisible(true);
      reset();
    } else {
      const timer = setTimeout(() => setIsVisible(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [modalOpen, reset]);

  if (!isVisible) return null;

  const handleUpdateFrom = async (data) => {
    console.log(data);
    // setModalOpen(false);
    const res = await axios.put(`/api/products/${filterData[0]._id}`, data);
    console.log(res);
  };

  return (
    <div
      className={`${
        modalOpen ? "flex" : "animatedOut flex"
      } absolute top-0 w-full h-full justify-center bg-blue-gray-500 bg-opacity-40 items-center`}
    >
      <div className="w-[500px] h-auto flex flex-col animated bg-blue-gray-500 relative rounded-lg p-5 items-center justify-center">
        <Title title="update products" />
        <p>ID: {filterData[0]._id}</p>
        <p>item: mango</p>
        <hr className="text-white" />
        <form
          onSubmit={handleSubmit(handleUpdateFrom)}
          className="py-5 flex flex-col gap-5"
        >
          <div className="flex gap-4">
            <InputField
              formData={register}
              input="name"
              inputName="item name"
              type="text"
              value={filterData[0].productName}
            />
            <InputField
              formData={register}
              input="category"
              inputName="category"
              type="text"
              value={filterData[0].category}
            />
          </div>
          <div className="flex gap-4">
            <InputField
              formData={register}
              input="stock"
              inputName="stock"
              type="text"
              value={filterData[0].stock}
            />
            <InputField
              formData={register}
              input="price"
              inputName="price"
              type="text"
              value={filterData[0].price}
            />
          </div>
          <Button
            type="submit"
            color="bg-optionalColor"
            width="w-full"
            text="update item"
          />
        </form>
        <div onClick={handleModal} className="absolute top-2 right-2">
          <CloseButton />
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
