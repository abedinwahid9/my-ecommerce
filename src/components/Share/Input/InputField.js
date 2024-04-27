import { Input } from "@material-tailwind/react";

const InputField = ({ inputName, type }) => {
  return (
    <div>
      <Input type={type} label={inputName} />
    </div>
  );
};

export default InputField;
