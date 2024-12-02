import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Button } from '@/components/ui/button';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table";
  import { PiCaretUpDownFill } from "react-icons/pi";
import { Card, CardHeader} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaPrint } from "react-icons/fa6";
import { YearPicker } from './YearPicker';

const StudentReport:React.FC = () => {
    const navigate=useNavigate();
    const {name}=useParams()
    const [active,setactive]=useState("General")
    interface Detail {
        count: number;
        subject: string;
        total_marks: string;
        obtain_marks: number;
        perc: number;
        status: string;
      }
      
      const detail: Detail[] = [
        {
          count: 1,
          subject: "Mathematics",
          total_marks: "100",
          obtain_marks: 90,
          perc: 90,
          status: "Passed",
        },
        {
          count: 2,
          subject: "Science",
          total_marks: "100",
          obtain_marks: 85,
          perc: 85,
          status: "Passed",
        },
        {
          count: 3,
          subject: "English",
          total_marks: "100",
          obtain_marks: 78,
          perc: 78,
          status: "Passed",
        },
        {
          count: 4,
          subject: "History",
          total_marks: "100",
          obtain_marks: 88,
          perc: 88,
          status: "Passed",
        },
        {
          count: 5,
          subject: "Geography",
          total_marks: "100",
          obtain_marks: 92,
          perc: 92,
          status: "Passed",
        },
      ];
      interface MONTH{
        id:number,
      Month:string
      };
      const month: MONTH[] = [
        { id: 1, Month: "January" },
        { id: 2, Month: "February" },
        { id: 3, Month: "March" },
        { id: 4, Month: "April" },
        { id: 5, Month: "May" },
        { id: 6, Month: "June" },
        { id: 7, Month: "July" },
        { id: 8, Month: "August" },
        { id: 9, Month: "September" },
        { id: 10, Month: "October" },
        { id: 11, Month: "November" },
        { id: 12, Month: "December" },
      ];
      const handlePrint = () => {
        window.print();
      
      };
      
  return (
    <div className=" lg:w-[78vw] sm:w-[100vw] bg-[#F6F5FA] relative  sm:left-0 lg:left-[20%] top-14 p-2">
      <p className="text-[#4D515A] lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Students {">"} Reports {">"} Student Reports 
    </p>
    <div className="flex  items-center justify-between gap-[12px]lg: px-[2] sm:p-0  lg:w-[95%] sm:w-[100%] ">
        <div className='flex  items-center gap-3'>
        <Button variant={'outline'} className='w-[44px]' onClick={()=>navigate(-1)}><FaArrowLeft /></Button>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
        Student Report
      </h1>
        </div>
          <div className='flex items-center gap-3'>      <Button variant={'outline'} className='text-[#1A55A5]' >Download Info</Button>
          
          <Button variant={'outline'} className='text-[#1A55A5]'  onClick={handlePrint}><FaPrint />
          </Button></div>

         </div>
      <div className=" items-center space-x-4 mt-7 bg-white rounded-lg">
     
     
      <Card className='w-[100%]  border-none bg-transparent rounded-none shadow-none' >
        <CardHeader>
            <h4 className='text-[14px] font-bold' >Student ID: 167895</h4>
            <p className='text-[14px]'>Joined: Mon, July 22,2022</p>
        </CardHeader>
      <CardHeader className="flex flex-row gap-11  items-center">
        <Avatar className="w-20 h-20">
          <AvatarImage src="https://via.placeholder.com/150" alt="Profile picture" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <h2 className="mt-4 text-xl font-semibold">{name}
        <p className='text-[14px] text-[#B0B0B0] font-[500]'>Date of Birth: <span className='font-bold  text-black text-[14px]'>22/07/2024</span></p>
        <p className='text-[14px] text-[#B0B0B0] font-[500]'>Gender: <span className='font-bold text-black text-[14px]'>Male</span></p>
            </h2><br/>
         
      </CardHeader>
      </Card>
    
      <Tabs defaultValue="General"  >
     <TabsList className=' bg-transparent rounded-none   border-b-[1px] px-3 border-[#E4E4E4] justify-center items-center gap-8 flex flex-wrap '>

    <TabsTrigger className={`${active==='General'? " text-[#1A55AF] border-b-2 border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('General')}} value="General"> General</TabsTrigger>
    <TabsTrigger  className={`${active==='Result'? " border-b-2 text-[#1A55AF] border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('Result')}}value="Result">Result</TabsTrigger>
    <TabsTrigger className={`${active==='Attendance'? " border-b-2 text-[#1A55AF] border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('Attendance')}} value="Attendance">Attendance</TabsTrigger>
 
  </TabsList>
  <TabsContent value="General">
     <div className='flex lg:flex-row sm:flex-col justify-between items-center w-[100%] '>
     <div className="lg:w-[45%] sm:w-[100%] text-[14px] px-3 box-border">
  <h1 className="font-bold text-[20px]">Contact Details</h1>
  <p className="text-[#B0B0B0] flex justify-between">
    Home Address: <span className="text-black">Lviv, Zelena St 96</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    City: <span className="text-black">Lviv</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    State: <span className="text-black">Lviv Oblast</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Postal Code: <span className="text-black">79000</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Country: <span className="text-black">Ukraine</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Home Phone number: <span className="text-black">+380 32 555 1234</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Home Mobile number: <span className="text-black">+380 67 555 5678</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Email Address: <span className="text-black">johndoe@example.com</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Emergency Contact number: <span className="text-black">+380 97 555 9876</span>
  </p>
</div>

<div className="lg:w-[45%] sm:w-[100%] text-[14px] px-4 box-border">
  <h1 className="font-bold text-[20px]">Enrollment Information</h1>
  <p className="text-[#B0B0B0] flex justify-between">
    Enrollment Grade Level: <span className="text-black">Grade 10</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Enrollment Date: <span className="text-black">September 1, 2023</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Program: <span className="text-black">Science and Mathematics</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Medical Condition: <span className="text-black">None</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Guardian name: <span className="text-black">Jane Doe</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Guardian Phone number: <span className="text-black">+380 63 555 8765</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Guardian Email: <span className="text-black">janedoe@example.com</span>
  </p>
  <p className="text-[#B0B0B0] flex justify-between">
    Guardian Occupation: <span className="text-black">Teacher</span>
  </p>
</div>

      
     </div>
     <div className='lg:w-[45%] sm:w-[100%] text-[14px]'>
        <h1 className='font-bold text-[20px]'>Academic Background</h1>
        <p className="text-[#B0B0B0] flex justify-between">
  Previous School name: <span className="text-black">Green Valley High School</span>
</p>
<p className="text-[#B0B0B0] flex justify-between">
  Previous School Address: <span className="text-black">123 Maple Street, Springfield</span>
</p>
<p className="text-[#B0B0B0] flex justify-between">
  Previous Grade Level: <span className="text-black">Grade 9</span>
</p>
<p className="text-[#B0B0B0] flex justify-between">
  Reason For leaving School: <span className="text-black">Family relocation</span>
</p>

    </div>
  
  </TabsContent>
  <TabsContent value="Result">
  <Table className="bg-white mt-3 lg:text-[14px] sm:text-[10px]  sm:mt-11">
        <TableHeader>
          <TableRow className="bg-[#F8FAFC]">
          <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">count
             <PiCaretUpDownFill/></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">Subject
             <PiCaretUpDownFill/></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black   ">
             <p  className="flex items-center">Total Marks
             <PiCaretUpDownFill/></p>  
            </TableHead>

            <TableHead className="font-montserrat font-bold text-black  ">
             <p className="flex items-center">Obtained Marks
             <PiCaretUpDownFill /></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black  ">
             <p className="flex items-center">Percentage
             <PiCaretUpDownFill /></p>  
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black  ">
             <p className="flex items-center">Status
             <PiCaretUpDownFill /></p>  
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {detail.map((item) => (
            <TableRow>
              <TableCell className="font-medium py-4 min-w-[150px]">{item.count}</TableCell>
              <TableCell className='min-w-[150px]'>{item.subject}</TableCell>
              <TableCell className='min-w-[150px]'>{item.total_marks}</TableCell>
              <TableCell className='min-w-[150px]'>{item.obtain_marks}</TableCell>
              <TableCell className='min-w-[150px]'>{item.perc}%</TableCell>
              <TableCell  ><span className='text-[#059691] rounded-[5rem] bg-[#E7ECF1] p-2'>{item.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
  </TabsContent>
  <TabsContent value="Attendance">
    <div className='flex lg:items-center  items-center  justify-between mb-5 lg:px-2 sm:px-0 mt-5  '>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[11px] font-bold leading-6 ">
   
        Attendence Summary
      </h1>
      <YearPicker/>
    </div>
    <div className="lg:grid grid-cols-5  sm:flex sm:items-center sm:justify-between lg:divide-x lg:divide-gray-300 text-center lg:text-[14px] sm:text-[10px] lg:items-center  gap-2 text-sm  ">
        <div >Total Classes<p>50</p></div>
       
        <div>Present<p className='text-[#059691]'>45</p></div>
       
        <div>Absent<p className='text-[#E11D48]'>4</p></div>
    
       
        <div>OnLeave<p className='text-[#FFA200]'>1</p></div>
       
        <div>Percentage<p className='text-[#9747FF]'>95%</p></div>
        <div/>
  </div>

  <Table className=" lg:text-[14px] sm:text-[10px] mt-9">
  <TableHeader>
    <TableRow className='bg-[#F8FAFC] '>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 lg:w-[30px] sm:w-[40px]">
      <p  className="flex items-center">MONTH
      <PiCaretUpDownFill/></p>  
      </TableHead>
      <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 lg:w-[120px] sm:w-[170px] ">
      <p  className="flex items-center">ATTENDANCE STATUS
      <PiCaretUpDownFill/></p>    
      </TableHead>
     
     
    </TableRow>
  </TableHeader>

<TableRow className='w-[100%] overflow-scroll'>
    <TableCell className="font-montserrat text-black  py-2"> </TableCell>
 
  
     <TableCell className='flex gap-1 text-[9px]'>

    
    {Array.from({ length: 31 }, (_, index) => (
      <span key={index} className="font-montserrat font-bold text-black px-2 py-2 ">
        {index +1}
      </span>
    ))}

     </TableCell>
  </TableRow> 

  <TableBody>
    {month.map((item, index) => (
      <TableRow key={index}>
        <TableCell className="font-medium py-4 px-4 lg:w-[30px]">{item.Month}</TableCell>
    

      <TableCell className='flex gap-4 text-[9px]'>
        {
        
          Array.from({ length: 31 }, (_, index) => {
            const letter = (index + 1) % 2 === 0 ? 'P' : 'A'; 
            const bgColor = letter === 'P' ? '#E7FCF1' : '#FFE4E6'; 
            const Color=letter==='P' ?'#059691':'#E11D48'
            return (
              <span
                key={index} 
                style={{ backgroundColor: bgColor ,color:Color}} 
                className={`font-montserrat text-black rounded-[50%] text-[9px]  px-2 py-[0.17rem] inline-block`}
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

  </TabsContent>
      </Tabs>
     
     
     

       </div>
   
    </div>
  )
}

export default StudentReport

    