import React, { useState } from "react";
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
} from "../components/ui/table";
import { PiCaretUpDownFill } from "react-icons/pi";
const Classes: React.FC = () => {
  const [Class, setclass] = useState<string>("");
  interface Detail {
    SR: number;
    class: string;
    section: string;
    total_student: number;
  }
  const detail: Detail[] = [
    {
      SR: 1,
      class: "10th",
      section: "A",
      total_student: 100,
    },
    {
      SR: 1,
      class: "10th",
      section: "A",
      total_student: 100,
    },
    {
      SR: 1,
      class: "10th",
      section: "A",
      total_student: 100,
    },
    {
      SR: 1,
      class: "10th",
      section: "A",
      total_student: 100,
    },
    {
      SR: 1,
      class: "10th",
      section: "A",
      total_student: 100,
    },
  ];
  return (
    <div className="lg:w-[80%]   sm:w-[100%]  bg-[#F6F5FA] relative lg:text-[14px] sm:text-[10px] sm:left-0 lg:left-[20%]  top-14 p-2">
      <p className="text-[#4D515A] font-montserrat  leading-3 py-2">
        Dashboard {">"} Classes {">"}
      </p>
      <div className="flex items-center gap-[12px] px-[2]">
        <h1 className="font-montserrat text-[22px] font-bold leading-6 ">
          {" "}
          Classes
        </h1>
        <Select
          value={Class}
          onValueChange={(value) => {
            setclass(value);
          }}
        >
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

      <Table className="bg-white mt-3 lg:text-[14px] sm:text-[10px]  sm:mt-11">
        <TableHeader>
          <TableRow className="bg-[#F8FAFC]">
          <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">SR#
             <PiCaretUpDownFill/></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">CLASSES
             <PiCaretUpDownFill/></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">SECTION
             <PiCaretUpDownFill/></p>  
            </TableHead>

            <TableHead className="font-montserrat font-bold text-black  ">
             <p className="flex items-center">TOTAL STUDENT
             <PiCaretUpDownFill /></p>  
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {detail.map((item) => (
            <TableRow>
              <TableCell className="font-medium py-4">{item.SR}</TableCell>
              <TableCell>{item.class}</TableCell>
              <TableCell>{item.section}</TableCell>
              <TableCell>{item.total_student}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Classes;
