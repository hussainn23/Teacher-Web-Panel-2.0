import React, { useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdPrint } from "react-icons/md";
import { FaAsterisk } from "react-icons/fa";
import Button from "../Buttons/Button";
export const Datesheet:React.FC = () => {
  const [Class, setclass] = useState<string>("");
  const [section, setsection] = useState<string>("");
  return (
    <div className="w-[80%]  h-[1008px] bg-[#F6F5FA] relative left-[20%] top-14 p-2">
      <p className="text-[#4D515A] font-montserrat text-[14px] leading-3 py-2">
        Dashboard {">"} Datesheet {">"}
      </p>
      <div className="flex items-center justify-between px-[2]">
        <h1 className="font-montserrat text-[22px] font-bold leading-6 ">
          {" "}
          Date Sheet
        </h1>

        <div className="flex gap-3">
         <Button text={'Print'} icon={<MdPrint/>} color={'white'}/>
         <Button text={'Download'} icon={< IoMdArrowRoundDown  />} color={'white'}/>
        </div>
      </div>
      <div className="flex gap-4 bg-white w-[100%] p-2 rounded-[5px] mt-2">
        <div>
          <p className="text-[14px] flex items-center gap-1">
            Select Class <FaAsterisk className="text-red-600" size={9} />
          </p>

          <select  className="flex focus:outline-none justify-between h-[38px] p-[4px] border-[1px] border-[#D0D5DD] rounded-[8px] w-[280px]" value={Class} onChange={(e)=>{setclass(e.target.value)}}>
          <option value="---"  selected>----</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
        </div>
        <div>
          <p className="text-[14px] flex items-center gap-1 ">
            Select Section <FaAsterisk className="text-red-600 " size={9} />
          </p>

          <select className="flex focus:outline-none justify-between h-[38px] p-[4px] border-[1px] border-[#D0D5DD] rounded-[8px] w-[280px]" value={section} onChange={(e)=>{setsection(e.target.value)}}>
          <option value="---"  selected>----</option>
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
          </select>
        </div>
       
      </div>
        <div className="flex gap-4 bg-[#F8FAFC] w-[100%] py-2 rounded-[5px] justify-evenly">
          <h2 className="text-[14px] font-[800]">DATE</h2>
          <h2 className="text-[14px] font-[800]">DAY</h2>
          <h2 className="text-[14px] font-[800]">SUBJECT</h2>
          <h2 className="text-[14px] font-[800]">TIME & ROOM</h2>
        </div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
        <div className="w-[100%]  bg-white h-[106px] b-t-[1px] border -[#E2E8F0] flex items-center justify-evenly text-[14px] text-[#1E293B]"><p className="translate-x-[-30px]">23-Oct-2024</p><p className="translate-x-[-50px]">Thursday</p><p className="translate-x-[-50px]">English</p><p>10:00AM</p></div>
    </div>
   
  );
};
