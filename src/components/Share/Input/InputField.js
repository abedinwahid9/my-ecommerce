import { Input } from "@material-tailwind/react";
import "./input.css";

const InputField = ({ inputName, type }) => {
  return (
    <div>
      <Input type={type} label={inputName} />
    </div>
  );
};

export default InputField;
