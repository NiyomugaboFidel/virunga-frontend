import { ChangeEvent, ReactNode, useState } from "react";
import Input from "../atoms/Input";
import Icon from "../atoms/Icon";

interface InputField {
  type: string;
  name?: string;
  value: string;
  id?: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  iconName?: string;
  iconTag?: ReactNode;
}
const FormField: React.FC<InputField> = ({
  type,
  onChange,
  name,
  id,
  value,
  className,
  placeholder,
  iconName,
  iconTag,
}) => {

  

  return (
    <div
      className={`${className} min-w-[260px] px-[16px] gap-[10px] py-[9px] rounded-[8px] border border-Gary-300  flex items-center justify-center transition-all ease-in-out duration-500 `}
    > 
         <Icon
          iconName={'input-l.svg'}
          icontype={false}
          className={` ${value ? 'hidden' : 'flex'} transition-all ease-in-out duration-500 hover:bg-transparent `}
        />
      <Input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
      />
      <Icon
          iconName={'input-l.svg'}
          icontype={false}
          className={` ${value ? 'flex' : 'hidden'} transition-all ease-in-out duration-500 hover:bg-transparent `}
        />
      {iconName ? (
        <Icon
          iconName={iconName}
          icontype={false}
          className={`${value ? 'flex' : 'hidden'} transition-all ease-in-out duration-500  hover:bg-transparent `}
        />
      ) : (
        <Icon
          iconTag={iconTag}
          icontype={false}
          className={`${value ? 'flex' : 'hidden'} transition-all ease-in-out duration-500  hover:bg-transparent `}
        />
      )}
    </div>
  );
};

export default FormField;
