import { ChangeEvent } from "react";
import Icon from "./Icon";
import svg from "@/app/data/svgIcon";

interface SelectData {
  value: string;
  label: string;
}

interface Select {
  SelectList: SelectData[];
  className?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  name:string
}
const Selector: React.FC<Select> = ({
  SelectList,
  className,
  onChange,
  value,
  name

}) => {
  return (
    <>
     <div className={`flex justify-between items-center w-full `}>
        <span>{name}</span>
        <span><Icon icontype={false} className="w-[14px] " iconTag={svg.dropdown_dark}/></span>
     </div>

     <div>

     </div>
    </>
  );
};

export default Selector;
