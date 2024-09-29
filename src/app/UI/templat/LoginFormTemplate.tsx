import Image from "next/image"
import Login from "../organisms/Login"

const LoginFormTemplate = () => {
  return (
    <div className=" flex lg:flex-row flex-col-reverse justify-center items-center gap-3 p-[20px] lg:p-[10px]">
        <div className=" h-full min-h-[95vh] lg:w-1/2">
            <Login />
        </div>
        <div className="hidden  lg:w-1/2 h-full min-h-[95vh] dark:bg-[#1B273A] bg-[#ACCBEE] rounded-[16px] overflow-hidden  lg:flex items-end justify-center">
            <Image width={1034} height={1302} src={'/images/image-login.png'} className=" overflow-hidden w-full h-full" alt="login"/>
        </div>
    </div>
  )
}

export default LoginFormTemplate