import React from 'react'

  import {
    Table,
    TableBody,
  
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  import { useNavigate } from 'react-router-dom';
  import { FaArrowLeft } from "react-icons/fa";
  import { IoFilterOutline } from "react-icons/io5";
  import  { useState } from "react";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AiOutlineSchedule } from "react-icons/ai";
import { ClassPicker } from './ClassPicker';
import { MonthPicker } from './MonthPicker';
const Attendence:React.FC= () => {
 
    const [Reg, setReg] = useState<string>("");
    const [name, setname] = useState<string>("");
     interface Student{
      id:number,
      name: String;
      registration: String;
    };
   
    
    const students:Student[]=[
      {  id:1,
        name:"Ahmad Azam",
        registration:"#16668"
      },
      {  id:1,
        name:"Ahmad Azam",
        registration:"#16668"
      },
      {  id:1,
        name:"Ahmad Azam",
        registration:"#16668"
      },
      
        {  id:1,
          name:"Ahmad Azam",
          registration:"#16668"
        },
        {  id:1,
          name:"Ahmad Azam",
          registration:"#16668"
        },
        {  id:1,
          name:"Ahmad Azam",
          registration:"#16668"
        },
        {  id:1,
          name:"Ahmad Azam",
          registration:"#16668"
        },
        {  id:1,
          name:"Ahmad Azam",
          registration:"#16668"
        },
        
          {  id:1,
            name:"Ahmad Azam",
            registration:"#16668"
          },
          {  id:1,
            name:"Ahmad Azam",
            registration:"#16668"
          },
    ]
  
  let navigate=useNavigate()
  return (
    <div className="w-[100%]  bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
    <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Attendence {">"}
    </p>
    <div className='flex justify-between '>
    <div className="flex items-center gap-[12px] px-[2] ">
    <Button variant={'outline'} className='w-[44px]' onClick={() => navigate(-1)}><FaArrowLeft /></Button>
      <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
        Attendence 
      </h1>
      
    
    </div>
    <div className='flex gap-3  ' >
      <Button variant={'outline'}><AiOutlineSchedule/>January</Button>
      <Button variant={'outline'}><IoFilterOutline  /></Button>
      </div>
    </div>
   

   <div className="bg-white w-[100%] pt-[14px] mt-3">
    <div className='flex lg:flex-row sm:flex-col md:flex-row items-center w-[100%] py-[2px] px-[4px] gap-2 text-[12px] '>
     <div className='flex items-center gap-1 lg:flex-row md:flex-col'>
     <p>Select Your Class:</p>
  
  <ClassPicker />
     </div>
   
     <div className='flex items-center gap-1 lg:flex-row md:flex-col'>
     <p>Enter your Reg#</p>
     <Input type='text' placeholder='' className='w-[200px] h-[40px]' value={Reg} onChange={(e)=>{setReg(e.target.value)}}/>
     </div>
     <div className='flex items-center gap-1 lg:flex-row md:flex-col'>
      <p>Enter your name</p>
      <Input type='text' placeholder='' className='w-[200px]' value={name} onChange={(e)=>{setname(e.target.value)}}/>
      </div>
    
    </div>
    <Table className=" table-auto lg:text-[14px] sm:text-[10px]">
  <TableHeader>
    <TableRow>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 lg:w-[120px] sm:w-[100px]">
        STUDENT REG#
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 lg:w-[120px] sm:w-[70px] ">
        STUDENT NAME
      </TableHead>
     
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 flex items-center lg:w-[120px] sm:text-[10px]">
   
        <MonthPicker />
      </TableHead>
    </TableRow>
  </TableHeader>


  <TableRow className='w-[100%] overflow-scroll'>
    <TableCell className="font-montserrat text-black  py-2"> </TableCell>
    <TableCell className="font-montserrat text-black  py-2"> </TableCell>  
  
     <TableCell className='flex gap-4'>

    
    {Array.from({ length: 31 }, (_, index) => (
      <span key={index} className="font-montserrat font-bold text-black px-2 py-2 ">
        {index +1}
      </span>
    ))}
     </TableCell>
  </TableRow>

  <TableBody>
    {students.map((item, index) => (
      <TableRow key={index}>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.registration}</TableCell>
        <TableCell className="font-medium py-4 px-4 lg:min-w-[180px]">{item.name}</TableCell>

      <TableCell className='flex gap-4'>
        {
        
          Array.from({ length: 31 }, (_, index) => {
            const letter = (index + 1) % 2 === 0 ? 'P' : 'A'; 
            const bgColor = letter === 'P' ? '#E7FCF1' : '#FFE4E6'; 
            const Color=letter==='P' ?'#059691':'#E11D48'
            return (
              <span
                key={index} 
                style={{ backgroundColor: bgColor ,color:Color}} 
                className={`font-montserrat text-black rounded-[50%] text-[12px]  px-2 py-2 inline-block`}
              >
                {letter}
              </span>
            );
          })
        
          
        }
      </TableCell>
      </TableRow>
    ))}
  </TableBody>
    </Table>
 



   </div>
    </div>
  )
}

export default Attendence