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
import { Link } from "react-router-dom";
const Report:React.FC = () => {
    const [Class, setclass] = useState<string>("");
    interface Detail {
        ID: string;
        Name: string;
        attendence: number;
        result: number;
      }
      const detail: Detail[] = [
        {
          ID: '#61667',
          Name: "John Doe",
          attendence: 80,
          result: 90,
        },
        {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
          {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
          {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
          {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
          {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
          {
            ID: '#61667',
            Name: "John Doe",
            attendence: 80,
            result: 90,
          },
      ];
  return (
    <div className="w-[100%]  bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
        <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Students {">"} Report
    </p>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
        Student Report
      </h1>
      <div className="bg-white px-2">
      <p className="mt-3 flex items-center">Select Assigned Classes<span className="text-[#E11D48]">*</span> </p>
    
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
   <Table className="bg-white mt-3 lg:text-[14px] sm:text-[10px]  sm:mt-11">
      <TableHeader>
        <TableRow className="bg-[#F8FAFC]">
        <TableHead className="font-montserrat font-bold text-black w-[15%]  ">
           <p  className="flex items-center">STUDENT ID
           <PiCaretUpDownFill/></p>  
          </TableHead>
          <TableHead className="font-montserrat font-bold text-black   w-[17%]   ">
           <p  className="flex items-center">STUDENT 
           <PiCaretUpDownFill/></p>  
          </TableHead>
          <TableHead className="font-montserrat font-bold text-black  w-[15%]   ">
           <p  className="flex items-center">ATTENDANCE
           <PiCaretUpDownFill/></p>  
          </TableHead>

          <TableHead className="font-montserrat font-bold text-black   w-[15%]   ">
           <p className="flex items-center">RESULT
           <PiCaretUpDownFill /></p>  
          </TableHead>
          <TableHead className="font-montserrat font-bold text-black   ">
           <p className="flex items-center">ACTION
           <PiCaretUpDownFill /></p>  
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {detail.map((item) => (
          <TableRow>
            <TableCell className="font-medium py-4">{item.ID}</TableCell>
            <TableCell>{item.Name}</TableCell>
            <TableCell>{item.attendence}%</TableCell>
            <TableCell>{item.result}%</TableCell>
            <TableCell><Link to='/' className="text-blue-600">View Report</Link></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
      </div>
     
    </div>
  )
}

export default Report