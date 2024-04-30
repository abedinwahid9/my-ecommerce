"use client";
import UploadImg from "@/components/DashBoard/UploadImg/UploadImg";
import Button from "@/components/Share/Button/Button";
import InputField from "@/components/Share/Input/InputField";
import Title from "@/components/Share/Title/Title";
import { useState } from "react";
import { useForm } from "react-hook-form";

const page = () => {
  const { register, handleSubmit } = useForm();
  const [imgData, setImgData] = useState([]);

  const onSubmit = (data) => {
    console.log({ ...data, imgData });
  };
  return (
    <div className="py-10 px-5">
      <Title title="add product" />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-3 my-10"
      >
        <InputField
          formData={register}
          input="categoryName"
          type="text"
          inputName="Product Category"
        />
        <UploadImg imgData={setImgData} uploadLimit="1" />
        <Button
          type="submit"
          color="bg-optionalColor"
          width="w-full"
          text="add category"
        />
      </form>
    </div>
  );
};

export default page;
