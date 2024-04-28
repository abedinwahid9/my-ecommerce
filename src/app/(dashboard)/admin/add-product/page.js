"use client";
import Button from "@/components/Share/Button/Button";
import InputField from "@/components/Share/Input/InputField";
import Title from "@/components/Share/Title/Title";
import { Option, Select } from "@material-tailwind/react";
import "./addproduct.css";

const page = () => {
  return (
    <div className="py-10 px-5">
      <Title title="add product" />
      <div className="flex flex-col gap-3 my-10">
        <div className="flex gap-5">
          <InputField type="text" inputName="Username" />
          <div>
            <div id="selected" class="relative w-full ">
              <Select className="dark:text-white " label="Category">
                <Option>single</Option>
                <Option ion>package</Option>
              </Select>
            </div>
          </div>
        </div>
        <div>
          <div class="relative w-full ">
            <textarea
              class="peer min-h-[100px]  w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-base font-normal text-blue-gray-700 dark:text-white  outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
              placeholder=""
            ></textarea>
            <label class="before:content[' '] after:content[' '] pointer-events-none dark:text-white absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 dark:peer-placeholder-shown:text-white peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 dark:peer-focus:text-white peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
              Details
            </label>
          </div>
        </div>

        <div className="flex gap-5">
          <InputField type="number" inputName="Price" />
          <InputField type="number" inputName="Stock" />
        </div>
        <div className="flex justify-center items-center border-blue-gray-200 border px-3 py-2.5 rounded-[7px] min-h-[100px]">
          <input type="file" id="upload" hidden accept="image/*" />
          <label htmlFor="upload"> upload</label>
        </div>
      </div>
      <Button color="bg-optionalColor" width="w-full" text="add product" />
    </div>
  );
};

export default page;
