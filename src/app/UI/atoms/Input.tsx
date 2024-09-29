import { ChangeEvent } from "react";

interface Input {
  type: string;
  name?: string;
  value: string;
  id?: string;
  placeholder?:string
  onChange: (e:ChangeEvent<HTMLInputElement>)=> void 
}

const Input: React.FC<Input> = ({ type, name, value, id, onChange,placeholder }) => {
  return (
    <input
      type={type}
      className="border-none outline-none bg-transparent w-full"
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      
    />
  );
};

export default Input;
