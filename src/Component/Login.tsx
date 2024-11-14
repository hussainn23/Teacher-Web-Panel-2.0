import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { IoEyeOffOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from 'react-router-dom'
interface LoginProps{
  setIsLoggedIn:(value:boolean)=>void
}
export const Login: React.FC<LoginProps> = ({setIsLoggedIn}) => {
  const [email, setemail] = useState<string | number>("");
  const [password, setpass] = useState<string | number>("");
  const[Showpassword,setshow]=useState(false)
  const navigate=useNavigate()
  const handlelogin=()=>{
    if(email&&password){
      setIsLoggedIn(true)
      navigate('/dashboard')
     
    }
    else{
      alert('Please fill in all fields')
    }
  }
  return (
    <div className="flex items-center font-montserrat justify-center w-[100vw] h-[100vh] bg-[#1A55A5] relative overflow-hidden ">
      <svg
        className="absolute top-[0] left-[0] z-0"
        xmlns="http://www.w3.org/2000/svg"
        width="1303"
        height="770"
        viewBox="0 0 1303 770"
        fill="none"
      >
        <path
          d="M-340.398 711.452H-45.0387V352.368H126.139V749.273H37.8059V431.268H257.096V533.582H303.235V263.433H416.524V768.398L484.532 729.119V283.587L443.711 260.002V709.651H641.389V315.49H527.327V369.177H576.039V8.29141L733.838 1.60199V759.05H677.922V403.567H911.877V755.019L974.397 753.904C977.913 753.819 974.397 300.396 974.397 300.396H854.761V730.148H1057.24V454.853V331.528L1001.33 367.633V701.332H1090.77V496.019L1188.54 496.19L1189.4 719.257H1225.85V558.196H1266.93V709.994H1301.32V521.5"
          stroke="#3468AE"
          stroke-width="3"
          stroke-miterlimit="2.6131"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <Card className="w-full sm:w-[100vw] sm:h-[100vh] lg:w-[556px] lg:h-[440px] z-20 px-[20px] py-[10px] flex flex-col relative gap-[40px]">
        <CardHeader>
          <img src={Logo} className="w-[360px] h-[70px] m-auto" />
          <CardTitle className="text-[32px] font-[400] font-montserrat text-center">
            Welcome!
          </CardTitle>
          <CardDescription className="font-montserrat text-center">
            Sign in to continue
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <Label
            htmlFor="email"
            className="text-[#28303e] font-[500]  text-[14px] text-left"
          >
            Email or Username
          </Label>
          <Input
            placeholder="e.g.abc@gmail.com"
            type="text"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setemail(e.target.value);
            }}
          />
          <Label
            htmlFor="password"
            className="text-[#344054] font-[500]  text-[14px] text-left mt-1"
          >
            Password
          </Label>
          <Input
            placeholder="******"
            type={Showpassword?'text':'password'}
            value={password}
            onChange={(e) => {
              setpass(e.target.value);
            }}
          />
           <p onClick={()=>{setshow(!Showpassword)}} className="absolute lg:right-24 lg:top-[78%] sm:top-[0%] sm:right-[60%]
           cursor-pointer">{Showpassword? <FiEye />:<IoEyeOffOutline />}</p>

          <Input type="submit" className="bg-[#1A55A5] cursor-pointer hover:bg-[#428bf8] text-white mt-6" onClick={handlelogin}></Input>
        </CardContent>
      </Card>
    </div>
  );
};
