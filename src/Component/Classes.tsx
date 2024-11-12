import React, { useState } from "react";
import { PiCaretUpDownFill } from "react-icons/pi";
const Classes: React.FC = () => {
  const [Class, setclass] = useState<string>("");
  return (
    <div className="w-[80%]  h-[100vh] bg-[#F6F5FA] relative left-[20%] top-14 p-2">
      <p className="text-[#4D515A] font-montserrat text-[14px] leading-3 py-2">
        Dashboard {">"} Classes {">"}
      </p>
      <div className="flex items-center gap-[12px] px-[2]">
        <h1 className="font-montserrat text-[22px] font-bold leading-6 ">
          {" "}
          Classes
        </h1>

        <select
          className="flex focus:outline-none justify-between h-[38px] p-[4px] border-[1px] border-[#D0D5DD] rounded-[8px] w-[280px] text-[16px]"
          value={Class}
          onChange={(e) => {
            setclass(e.target.value);
          }}
        >
          <option value="---" selected>
            Select Class
          </option>
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
        </select>
      </div>

     <div className="bg-white w-[100%] pt-[14px] mt-3">
     <div className="flex justify-between bg-[#F8FAFC] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <h2 className="text-[14px] font-[800] flex items-center gap-3">SR#<PiCaretUpDownFill /></h2>
        <h2 className="text-[14px] font-[800] flex items-center gap-3">CLASS<PiCaretUpDownFill /></h2>
        <h2 className="text-[14px] font-[800] flex items-center gap-3">SECTION<PiCaretUpDownFill /></h2>
        <h2 className="text-[14px] font-[800] flex items-center gap-3">TOTAL STUDENT<PiCaretUpDownFill /></h2>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      <div className="flex justify-between border-t-[1px] border-['#4D515A'] w-[100%] py-[8px] rounded-[5px] px-[34px] self-center">
        <p >1</p>
        <p  className="translate-x-[-50px]">9th</p>
        <p className="translate-x-[-100px]">A</p>
        <p className="translate-x-[-120px]">100</p>
      </div>
      </div>

    
    </div>
  );
};

export default Classes;
