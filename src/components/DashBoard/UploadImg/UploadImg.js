"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoCloudUpload } from "react-icons/io5";

const UploadImg = () => {
  const [imgShow, setImgShow] = useState([]);
  const [uploadShow, setUploadShow] = useState(true);

  useEffect(() => {
    if (imgShow.length === 3) {
      setUploadShow(false);
    }
  }, [imgShow]);

  console.log(uploadShow);

  const handleImg = (e) => {
    if (imgShow.length === 3) {
      return;
    }
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setImgShow([...imgShow, ...urls]);
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
