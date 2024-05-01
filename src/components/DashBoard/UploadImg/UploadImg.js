"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

const UploadImg = ({ uploadLimit, imgData }) => {
  const [imgShow, setImgShow] = useState([]);
  const [uploadShow, setUploadShow] = useState(true);

  useEffect(() => {
    if (imgShow.length === +uploadLimit) {
      setUploadShow(false);
    }
  }, [imgShow, uploadLimit]);

  const handleImg = async (e) => {
    const imgDataS = e.target.files[0];
    if (imgShow.length === +uploadLimit) {
      return;
    }

    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImgShow([...imgShow, ...urls]);

    const formData = new FormData();
    formData.append("file", imgDataS);
    formData.append("upload_preset", "pickle_BD");

    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dq19zuw4z/image/upload",
      formData
    );
    imgData((prevImg) => [...prevImg, res.data.url]);
  };

  return (
    <div className="flex justify-center items-center border-blue-gray-200 border px-3 py-2.5 rounded-[7px] min-h-[100px]">
      <div className="w-1/2 flex gap-3">
        {imgShow.map((img, i) => {
          return (
            <Image
              key={i}
              className="w-[90px] h-[90px] rounded-md"
              width={0}
              height={0}
              src={img}
              alt="upload"
            />
          );
        })}
      </div>
      <div className="w-1/2">
        <input
          disabled={!uploadShow}
          onChange={handleImg}
          type="file"
          id="upload"
          hidden
          accept="image/*"
        />

        <label
          className={`${
            !uploadShow ? "cursor-not-allowed" : "cursor-pointer"
          } text-secondaryColor flex flex-col  items-center gap-1`}
          htmlFor="upload"
        >
          <IoCloudUpload className="text-2xl " />
          <span className="font-bold font-lobsterTwo">Upload Image</span>
        </label>
      </div>
    </div>
  );
};

export default UploadImg;
