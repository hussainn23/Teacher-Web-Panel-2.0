import React from 'react'
import {
    Table,
    TableBody,
  
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { FaDownload } from "react-icons/fa6";
  import { useNavigate } from 'react-router-dom';
  import { FaArrowLeft } from "react-icons/fa";
  import { IoFilterOutline } from "react-icons/io5";
  import  { useState } from "react";
  import { MdLocalPrintshop } from "react-icons/md";
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { BsThreeDotsVertical } from "react-icons/bs";
import { ClassPicker } from './ClassPicker';

import { YearPicker } from './YearPicker';
const Result:React.FC = () => {
    const [name,setname]=useState<string>('')
    const [exam,setexam]=useState<string>('')
    interface Student{
        id:number,
        name: String;
         class: String;
         obtainedMarks:number;
         totalMarks:number;
         percentage:number;
         status:string
      };
      const students: Student[] = [
        {
          id: 1,
          name: "Alice",
          class: "10th",
          obtainedMarks: 78,
          totalMarks: 100,
          percentage: 78,
          status: "Pass",
        },
        {
          id: 2,
          name: "Bob",
          class: "11th",
          obtainedMarks: 45,
          totalMarks: 100,
          percentage: 45,
          status: "Fail",
        },
        {
          id: 3,
          name: "Charlie",
          class: "12th",
          obtainedMarks: 89,
          totalMarks: 100,
          percentage: 89,
          status: "Pass",
        },
        {
          id: 4,
          name: "Diana",
          class: "9th",
          obtainedMarks: 92,
          totalMarks: 100,
          percentage: 92,
          status: "Pass",
        },
        {
          id: 5,
          name: "Ethan",
          class: "10th",
          obtainedMarks: 56,
          totalMarks: 100,
          percentage: 56,
          status: "Pass",
        },
        {
          id: 6,
          name: "Fiona",
          class: "11th",
          obtainedMarks: 34,
          totalMarks: 100,
          percentage: 34,
          status: "Fail",
        },
        {
          id: 7,
          name: "Grace",
          class: "12th",
          obtainedMarks: 80,
          totalMarks: 100,
          percentage: 80,
          status: "Pass",
        },
        {
          id: 8,
          name: "Harry",
          class: "9th",
          obtainedMarks: 70,
          totalMarks: 100,
          percentage: 70,
          status: "Pass",
        },
        {
          id: 9,
          name: "Ivy",
          class: "10th",
          obtainedMarks: 61,
          totalMarks: 100,
          percentage: 61,
          status: "Pass",
        },
        {
          id: 10,
          name: "Jack",
          class: "11th",
          obtainedMarks: 49,
          totalMarks: 100,
          percentage: 49,
          status: "Fail",
        },
      ];
      
    
    let navigate=useNavigate()
  return (
    <div className="w-[100%] bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
    <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Result {">"}
    </p>
    <div className='flex justify-between lg:w-[80%] sm:w-[100%] lg:flex-row sm:flex-col gap-2 '>
    <div className="flex items-center gap-[12px] px-[2] ">
    <Button variant={'outline'} className='w-[44px]' onClick={() => navigate(-1)}><FaArrowLeft /></Button>
      <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
    Result
      </h1>
      
    
    </div>
    <div className='flex gap-3  ' >
        <Button variant={'outline'}><MdLocalPrintshop />Print</Button>
      <Button variant={'outline'}><FaDownload />Result Sheet</Button>
      <Button variant={'outline'}><IoFilterOutline  /></Button>
      </div>
    </div>
   

   <div className="bg-white w-[100%] pt-[14px] mt-3">
    <div className='flex lg:flex-row sm:flex-col md:flex-row items-center w-[100%] py-[2px] px-[4px] gap-2 text-[12px] '>
    <div className='flex gap-1   md:flex-col self-start sm:justify-between sm:items-center lg:items-start'>
     <p>Enter  name:</p>
        <Input  value={name} type='text' onChange={(e)=>{setname(e.target.value)}}/>
      
     </div>
     <div className='flex gap-1  md:flex-col self-start sm:justify-between sm:items-center lg:items-start'>
     <p>Select Your Class:</p>
        <ClassPicker />
     </div>
     <div className='flex gap-1   md:flex-col self-start sm:justify-between sm:items-center lg:items-start'>
     <p>Select Your Year:</p>
        <YearPicker />
     </div>
     <div className='flex gap-1  md:flex-col self-start sm:justify-between sm:items-center lg:items-start'>
     <p>Select Exam Type:</p>
     <Select
          value={exam}
          onValueChange={(value) => {
            setexam(value);
          }}
        >
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="--" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="First Term">First Term</SelectItem>
            <SelectItem value="Mid Term">Mid Term</SelectItem>
            <SelectItem value="Final Term">Final Term</SelectItem>
          </SelectContent>
        </Select>
     </div>
    
    </div>
    <Table className=" table-auto lg:text-[14px] sm:text-[10px] w-[90vw]">
  <TableHeader>
    <TableRow>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 box-border  ">
        STUDENT NAME 
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 ">
   
        CLASS 
     
      
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  flex items-center ">
    
        O.MARKS 
     
     
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
        T.MARKS 
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
      PERCENTAGE 
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
        STATUS  
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
       
      </TableHead>
    
 </TableRow>
  </TableHeader>


  <TableBody>
    {students.map((item, index) => (
      <TableRow key={index}>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.name}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.class}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.obtainedMarks}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.totalMarks}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.percentage}%</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.status}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]"><BsThreeDotsVertical /></TableCell>
      </TableRow>
    ))}
  </TableBody>

    </Table>
 



   </div>
</div>
  )
}

export default Result