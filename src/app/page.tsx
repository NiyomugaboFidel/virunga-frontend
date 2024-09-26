"use client";
import { ChangeEvent, useState } from "react";
import SelectField from "./UI/molecules/SelectField";
interface SelectData {
  value:string,
  label:string
  }
  
  interface Select {
      SelectList: SelectData[] 
  }
export default function Home() {
  const SelectList:SelectData[] = [
    {
        value:'male',
        label:'Male'
    },
    {
        value:'female',
        label:'Female'
    },
  ]
  const [selected, setSelected] = useState(SelectList[0].value);
  return (
    <main className="flex dark:bg-gray-900 bg-white min-h-screen flex-col items-center justify-center">
      <h2 className="dark:text-white text-black">Hello world</h2>
       <SelectField name="Gender" onChange={(e)=> setSelected( e.target.value)} value={selected}  iconName="input-x.svg" className="" SelectList={SelectList}  />
    </main>
  );
}
