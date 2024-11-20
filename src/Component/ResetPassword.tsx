import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { IoEyeOffOutline } from "react-icons/io5";
import { FiEye } from "react-icons/fi";
import { Button } from '@/components/ui/button';
import { FaKey } from "react-icons/fa6";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { useNavigate } from "react-router-dom";


export const ResetPassword:React.FC = () => {
    const [password, setpass] = useState<string >("");
    const [confirmpass, setconfirm] = useState<string >("");
    const[Showpassword,setshow]=useState(false)
    const navigate=useNavigate();
    const handlesubmit = () => {
        if (!password || !confirmpass) {
          alert('Enter values in both fields');
          return;
        }
      
        if (!validatepassword(password)) {
          return; 
        }
      
        if (password !== confirmpass) {
          alert('Passwords do not match');
          return;
        }
      
        navigate('/');
      };
      
      const validatepassword = (pass: string): boolean => {
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(pass)) {
          alert(
            'Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character.'
          );
          return false;
        }
        return true;
      };
      
  return (
    <div className="flex items-center font-montserrat justify-center w-[100vw] h-[100vh] lg:bg-[#1A55A5] relative overflow-hidden sm:bg-white ">
    <svg
      className="absolute top-[0] left-[0] z-0 "
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
    <Card className="w-full sm:h-[100vh] lg:w-[556px] lg:h-[520px] sm:w-[100vw] z-20 px-[20px] py-[10px] flex flex-col relative gap-[40px]">
      <CardHeader>
        <img src={Logo} className="w-[360px] h-[70px] m-auto" />
        <CardTitle className="text-[32px] font-[400] font-montserrat text-center">
          Hurray!
        </CardTitle>
        <CardDescription className="font-montserrat text-center">
          Enter new password
        </CardDescription>
      </CardHeader>
      <CardContent className="">

        <Label
          htmlFor="password"
          className="text-[#344054] font-[500]  text-[14px] text-left  "
        >
          Password
        </Label>
        <div className="flex items-center justify-between rounded-md px-2 border-[1px] border-[#D0D5DD]">
        <FaKey className="text-[#667085]"/>
        <Input
          placeholder="*****"
          type={Showpassword?'text':'password'}
          value={password}
              className="outline-none border-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0"
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />

     
     <p onClick={()=>{setshow(!Showpassword)}} >{Showpassword? <FiEye />:<IoEyeOffOutline />}</p>
        </div>
        <p className="text-[12px] mt-2">Password must be at least <span className="text-[#1A55A5]">8 Characters</span> and must contain at least a <span className="text-[#1A55A5]">Capital Letter</span>, a Number and a <span className="text-[#1A55A5]">Special Character.</span></p>
        <Label
          htmlFor="password"
          className="text-[#344054] font-[500]  text-[14px] text-left mt-1 "
        >
          Confirm Password
        </Label>
        <div className="flex items-center justify-between rounded-md px-2 border-[1px] border-[#D0D5DD]">
        <FaKey className="text-[#667085]"/>
        <Input
          placeholder="*****"
          type={Showpassword?'text':'password'}
          value={confirmpass}
              className="outline-none border-none focus:ring-0 focus:border-none focus-visible:outline-none focus-visible:ring-0"
          onChange={(e) => {
            setconfirm(e.target.value);
          }}
        />
          <p onClick={()=>{setshow(!Showpassword)}} >{Showpassword? <FiEye />:<IoEyeOffOutline />}</p>
        </div>
         
          <Button className="bg-[#1A55A5] hover:bg-[#428bf8] mt-3 w-[100%]" onClick={handlesubmit}>Set Password</Button>
          <p className="text-[12px] mt-2">An email with the reset password link will be sent to your registered email.</p>
      </CardContent>
    </Card>
  </div>
  )
}
