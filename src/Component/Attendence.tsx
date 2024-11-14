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
    <div className="w-[80%]  h-[100vh] bg-[#F6F5FA] font-montserrat relative left-[20%] top-14 p-2 overflow-hidden">
    <p className="text-[#4D515A]  text-[14px] leading-3 py-2">
      Dashboard {">"} Attendence {">"}
    </p>
    <div className='flex justify-between w-[100%] '>
    <div className="flex items-center gap-[12px] px-[2] ">
    <Button variant={'outline'} className='w-[44px]' onClick={() => navigate(-1)}><FaArrowLeft /></Button>
      <h1 className="font-montserrat text-[22px] font-bold leading-6 ">
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
    <div className='flex items-center w-[100%] py-[2px] px-[4px] justify-between text-[12px] gap-2'>
    <p>Your Class:</p>
  
     <ClassPicker />
  
     <p>Enter your Reg#</p>
     <Input type='text' placeholder='' className='w-[200px] h-[40px]' value={Reg} onChange={(e)=>{setReg(e.target.value)}}/>
     <p>Enter your name</p>
     <Input type='text' placeholder='' className='w-[200px]' value={name} onChange={(e)=>{setname(e.target.value)}}/>
    </div>
    <Table className="min-w-full table-auto">
  <TableHeader>
    <TableRow>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 min-w-[120px]">
        STUDENT REG#
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 min-w-[180px]">
        STUDENT NAME
      </TableHead>
     
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 flex items-center min-w-[120px]">
   
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
        <TableCell className="font-medium py-4 px-4 min-w-[180px]">{item.registration}</TableCell>
        <TableCell className="font-medium py-4 px-4 min-w-[180px]">{item.name}</TableCell>

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