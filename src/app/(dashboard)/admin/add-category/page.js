/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import CategoryTable from "@/components/DashBoard/CategoryTable/CategoryTable";
import UploadImg from "@/components/DashBoard/UploadImg/UploadImg";
import Button from "@/components/Share/Button/Button";
import DisableButton from "@/components/Share/DisableButton/DisableButton";
import InputField from "@/components/Share/Input/InputField";
import Title from "@/components/Share/Title/Title";
import { categoryDatas } from "@/lib/redux/feature/allCategory/allCategorySlice";
import axios from "axios";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const page = () => {
  const { register, handleSubmit, reset } = useForm();
  const [imgData, setImgData] = useState([]);
  const [imgShow, setImgShow] = useState([]);
  const [uploadLimit, setUploadLimit] = useState(1);
  const [uploadShow, setUploadShow] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (imgShow.length === uploadLimit) {
      setUploadShow(false);
    }
  }, [imgShow, setImgShow, uploadLimit]);

  const onSubmit = async (data) => {
    try {
      // Combine form data with imgData
      const categoryData = { ...data, imgData };

      // Send POST request to backend
      const res = await axios.post(
        "/api/categories",
        { ...categoryData },
        {
          headers: {
            "Content-Type": "application/json", // Corrected content type
          },
        }
      );

      if (res.data.acknowledged) {
        dispatch(categoryDatas());
        reset();
        setImgShow([]);
        setImgData([]);
        setUploadShow(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="py-10 px-5">
      <Title title="add category" />

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
        <UploadImg
          uploadShow={uploadShow}
          imgShow={imgShow}
          setImgShow={setImgShow}
          imgData={setImgData}
          uploadLimit={uploadLimit}
        />
        {imgData.length === 0 ? (
          <DisableButton
            color="bg-optionalColor"
            width="w-full"
            text="add category"
          />
        ) : (
          <Button
            type="submit"
            color="bg-optionalColor"
            width="w-full"
            text="add category"
          />
        )}
      </form>
      <div>
        <CategoryTable />
      </div>
    </div>
  );
};

export default page;
