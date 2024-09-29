"use client";
import Link from "next/link";
import Logo from "../atoms/Logo";
import FormField from "../molecules/FormField";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import { ChangeEvent, useState } from "react";

const SignUp: React.FC = () => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    passwold: "",
  });
  const handleSubmit = (e:ChangeEvent<HTMLFormElement>)=>{
    e.preventDefault()
    console.log(inputs);
   }
  return (
    <div className="w-full h-full min-h-[95vh]">
      <div className="w-full h-full min-h-[95vh] gap-5 flex flex-col items-center justify-between lg:pl-[50px]  xl:pl-[200px] 2xl:pl-[316px] lg:pr-[50px] ">
        <div className="w-full ">
          <Logo textDark="dark:text-[#ffffff]" textLight="text-[#ffffff]" />
        </div>
        <div className="h-full w-full  flex flex-col gap-[24px]">
          <div className=" w-full flex flex-col gap-[24px]">
            <h2 className="w-full text-headingH2 text-Gary-900 font-[600] dark:text-textColor-light">
              Create an account
            </h2>
            <p className=" w-full text-bodyDefault dark:text-[#CAD0D9] flex md:flex-row flex-col ">
              I already have an account{" "}
              <Link className="underline font-[500] px-1" href="/login">
                Sign in
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-[24px] ">
            <FormField
              type="text"
              iconName="input-v.svg"
              onChange={(e) =>
                setInputs({ ...inputs, firstName: e.target.value })
              }
              value={inputs.firstName}
              placeholder="FirstName"
              className="w-full"
            />
            <FormField
              type="text"
              iconName="input-v.svg"
              className="w-full"
              placeholder="LastName"
              onChange={(e) =>
                setInputs({ ...inputs, lastName: e.target.value })
              }
              value={inputs.lastName}
            />
            <FormField
              type="email"
              iconName="input-v.svg"
              onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              value={inputs.email}
              className="w-full"
              placeholder="Email"
            />
            <FormField
              type="password"
              iconName="input-v.svg"
              className="w-full"
              onChange={(e) =>
                setInputs({ ...inputs, passwold: e.target.value })
              }
              value={inputs.passwold}
              placeholder="Password"
            />
            <div className=" w-full  flex  flex-col gap-[10px]">
              <span className="flex items-center justify-center gap-2">
                <span className="flex  items-center justify-center">
                  <Input type="checkbox" onChange={() => {}} value="" />
                </span>
                <p className="w-full text-start text-bodyDefault dark:text-[#CAD0D9]">
                  Save the password
                </p>
              </span>
              <span className="flex items-start justify-start gap-2">
                <span className="flex  items-center justify-center">
                  <Input type="checkbox" onChange={() => {}} value="" />
                </span>
                <p className="w-full text-start text-bodyDefault dark:text-[#CAD0D9]">
                  I would like to receive personalized commercial offers from
                  Cartzilla by email.
                </p>
              </span>
            </div>
            <div className="w-full">
              <Button
                label="Create an account"
                onClick={() => {}}
                type="submit"
                className=" w-full  text-center"
              />
            </div>
          </form>

          <div className=" w-full flex flex-col gap-[5px] 2xl:gap-[10px] justify-center ">
            <div className=" w-full flex gap-2">
              <span className="w-2/3 flex items-center justify-center  ">
                <span className="h-[2px] bg-gray-200 dark:bg-Gary-700 w-full"></span>
              </span>
              <span className=" w-full flex items-center justify-center text-bodyDefault text-center ">
                Or continue with
              </span>
              <span className="w-2/3  flex items-center justify-center">
                <span className="h-[2px] bg-gray-200 dark:bg-Gary-700 w-full"></span>
              </span>
            </div>
            <div className=" w-full flex md:flex-row flex-col justify-center items-center gap-[16px] dark:text-white">
              <button className=" w-full border dark:border-Gary-700 px-[24px] py-[12px] rounded-[8px] dark:text-white bg-white text-[16px] dark:bg-primaryColor-dark leading-[24px] font-[500] text-Gary-700">
                Google
              </button>
              <button className="w-full border dark:border-Gary-700 px-[24px] py-[12px] rounded-[8px] dark:text-white bg-white text-[16px] dark:bg-primaryColor-dark leading-[24px] font-[500] text-Gary-700">
                Facebook
              </button>
              <button className=" w-full border dark:border-Gary-700 px-[24px] py-[12px] rounded-[8px] dark:text-white bg-white dark:bg-primaryColor-dark text-[16px] leading-[24px] font-[500] text-Gary-700">
                Apple
              </button>
            </div>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2">
          <span className="underline text-bodyDefault font-[600] ">
            <Link href={"/help"}>Need help?</Link>{" "}
          </span>
          <p className="text-bodyDefault dark:text-[#CAD0D9]">
            {" "}
            &copy; All rights reserved. Made by Virunga
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
