"use client";
import InputField from "@/components/Share/Input/InputField";
import Title from "@/components/Share/Title/Title";
import { Option, Select, Textarea } from "@material-tailwind/react";

const page = () => {
  return (
    <div className="py-10 px-5">
      <Title title="add product" />
      <div className="flex flex-col my-10">
        <div>
          <InputField type="text" inputName="Username" />
          <Select label="Item category">
            <Option>single</Option>
            <Option>package</Option>
          </Select>
        </div>
        <Textarea label="Details" />
        <div>
          <InputField type="number" inputName="Price" />
          <InputField type="number" inputName="Stock" />
        </div>
        <input type="file" />
      </div>
      <button>add product</button>
    </div>
  );
};

export default page;
