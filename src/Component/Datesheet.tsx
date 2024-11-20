import React, { useState } from "react";
import { IoMdArrowRoundDown } from "react-icons/io";
import { MdPrint } from "react-icons/md";
import { FaAsterisk } from "react-icons/fa";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,

  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table"
import Button from "../Buttons/Button";

export const Datesheet: React.FC = () => {
  const [Class, setclass] = useState<string>("");
  const [section, setsection] = useState<string>("");
  interface Datesheet{
    Date:string,
    Day:string,
    Subject:string,
    Time:string,
    Room:string
  }
  const datesheet:Datesheet[]=[
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
    {
      Date:"23-Oct-2024",
      Day:"Monday",
      Subject:"Chemistry",
      Time:'10:00AM',
      Room:"101"
    },
  ]
  return (
    <div className="w-[100%]  bg-[#F6F5FA] relative sm:left-0 lg:left-[20%] top-14 p-2 ">
      <p className="text-[#4D515A] font-montserrat text-[14px] leading-3 py-2">
        Dashboard {">"} Datesheet {">"}
      </p>
      <div className="flex items-center justify-between px-[2]  lg:w-[80%] sm:w-[100%]">
        <h1 className="font-montserrat lg:text-[22px] sm:text-[17px] font-bold leading-6 ">
          {" "}
          Date Sheet
        </h1>

        <div className="flex gap-3">
          <Button text={"Print"} icon={<MdPrint />} color={"white"} />
          <Button
            text={"Download"}
            icon={<IoMdArrowRoundDown />}
            color={"white"}
          />
        </div>
      </div>
      <div className="flex lg:flex-row sm:flex-col gap-4 bg-white w-[100%] p-2 rounded-[5px] mt-2">
        <div >
          <p className="text-[14px] flex items-center gap-1">
            Select Class <FaAsterisk className="text-red-600" size={9} />
          </p>

          <Select value={Class} onValueChange={(value)=>{
            setclass(value)
          }}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Class 10A">Class 10A</SelectItem>
              <SelectItem value="Class 10B">Class 10B</SelectItem>
              <SelectItem value="Class 9A">Class 9A</SelectItem>
              <SelectItem value="Class 9B">Class 9B</SelectItem>
              <SelectItem value="Class 8A">Class 8A</SelectItem>
              <SelectItem value="Class 8B">Class 8B</SelectItem>
              <SelectItem value="Class 7A">Class 7A</SelectItem>
              <SelectItem value="Class 7B">Class 7B</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <p className="text-[14px] flex items-center gap-1 ">
            Select Section <FaAsterisk className="text-red-600 " size={9} />
          </p>

          <Select value={section} onValueChange={(value)=>{
            setsection(value)
          }}>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="--" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Table className="bg-white lg:text-[14px] sm:text-[12px] w-[90vw] ">
  
  <TableHeader>
    <TableRow className="bg-[#FAF8FC]">
      <TableHead className='font-montserrat font-bold text-black'>DATE</TableHead>
      <TableHead className='font-montserrat font-bold text-black'>DAY</TableHead>
      <TableHead className='font-montserrat font-bold text-black '>TIME</TableHead>
      <TableHead className='font-montserrat font-bold text-black '>SUBJECT</TableHead>
 
    </TableRow>
  </TableHeader>
  <TableBody>
 
      {
        datesheet.map((item)=>(
          <TableRow>
          <TableCell className="font-medium py-4">{item.Date}</TableCell>
          <TableCell className="font-medium py-4">{item.Day}</TableCell>
          <TableCell className="font-medium py-4">{item.Subject}</TableCell>
          <TableCell className="font-medium py-4">{item.Time}<br/><span className="font-light">Room-{item.Room}</span></TableCell>
          </TableRow>
        ))
      }
    
  
  </TableBody>
   </Table>
    </div>
  );
};
