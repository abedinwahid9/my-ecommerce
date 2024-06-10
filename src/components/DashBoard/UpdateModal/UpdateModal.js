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

const UpdateModal = ({ handleModal, modalOpen, modalData }) => {
  const [isVisible, setIsVisible] = useState(modalOpen);
  const { register, handleSubmit } = useForm();
  const { isLoading, allProducts } = useAppSelector(
    (state) => state.allProducts
  );
  const dispatch = useAppDispatch();

  const filterData = allProducts?.filter((data) => data._id === modalData);

  useEffect(() => {
    dispatch(productFetch());
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
      <div className="w-[500px] h-auto flex flex-col animated bg-blue-gray-500 relative rounded-lg p-5 items-center justify-center">
        <Title title="update products" />
        <p>ID: {modalData}</p>
        <p>item: mango</p>
        <hr className="text-white" />
        <form className="py-5 flex flex-col gap-5">
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
              input="price"
              inputName="price"
              type="text"
              value={filterData[0].price}
            />
            <InputField
              formData={register}
              input="stock"
              inputName="stock"
              type="text"
              value={filterData[0].stock}
            />
          </div>
          <Button
            type="submit"
            color="bg-optionalColor"
            width="w-full"
            text="add category"
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
