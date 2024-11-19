import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table";
  import { PiCaretUpDownFill } from "react-icons/pi";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FaPrint } from "react-icons/fa6";
import { YearPicker } from './YearPicker';

const StudentReport:React.FC = () => {
    const navigate=useNavigate();
    const {name}=useParams()
    const [active,setactive]=useState("")
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
      
  return (
    <div className="lg:w-[100%] sm:w-[117%] lg:px-3  sm:p-0 bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">StudentReport
      <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Students {">"} Reports {">"} Student Reports 
    </p>
    <div className="flex items-center justify-between gap-[12px]lg: px-[2] sm:p-0  lg:w-[75%] sm:w-[100%] ">
        <div className='flex items-center gap-3'>
        <Button variant={'outline'} className='w-[44px]' onClick={()=>navigate(-1)}><FaArrowLeft /></Button>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
        Student Report
      </h1>
        </div>
          <div className='flex items-center gap-3'>      <Button variant={'outline'} className='text-[#1A55A5]' >Download Info</Button>
          <Button variant={'outline'} className='text-[#1A55A5]' ><FaPrint /></Button></div>

</div>
      <div className="flex items-center space-x-4 mt-7">
     
     
      <Card className="lg:w-[80%] sm:w-[110%]">
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
<CardContent className='w-[99%]  '>
      <Tabs defaultValue="General" className="w-[100%]">
  <TabsList className='w-[100%] bg-white'>
  <div className='w-[100%]  border-b-[1px] px-3 border-[#E4E4E4] justify-center items-center gap-8 flex '>
    <TabsTrigger className={`${active==='General'? "py-3 text-[#1A55AF] border-b-2 border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('General')}} value="General"> General</TabsTrigger>
    <TabsTrigger  className={`${active==='Result'? "py-3 border-b-2 text-[#1A55AF] border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('Result')}}value="Result">Result</TabsTrigger>
    <TabsTrigger className={`${active==='Attendance'? "py-3 border-b-2 text-[#1A55AF] border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('Attendance')}} value="Attendance">Attendance</TabsTrigger>
 </div>
  </TabsList>
  <TabsContent value="General">
     <div className='flex lg:flex-row sm:flex-col justify-between items-center w-[100%] '>
     <div className="lg:w-[45%] sm:w-[100%] text-[14px]">
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

<div className="lg:w-[45%] sm:w-[100%] text-[14px]">
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
              <TableCell className="font-medium py-4">{item.count}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>{item.total_marks}</TableCell>
              <TableCell>{item.obtain_marks}</TableCell>
              <TableCell>{item.perc}%</TableCell>
              <TableCell  ><span className='text-[#059691] rounded-[5rem] bg-[#E7ECF1] p-2'>{item.status}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
  </TabsContent>
  <TabsContent value="Attendance">
    <div className='flex items-center justify-between mb-5 px-2 mt-5'>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
   
        Attendence Summary
      </h1>
      <YearPicker/>
    </div>
    <div className='w-[100%] font-[600] '>
    
      <Separator className="my-4" />
      <div className="flex h-5 text-center lg:text-[14px] sm:text-[10px] items-center justify-evenly space-x-4 text-sm">
        <div>Total Classes<p>50</p></div>
        <Separator orientation="vertical" />
        <div>Present<p className='text-[#059691]'>45</p></div>
        <Separator orientation="vertical" />
        <div>Absent<p className='text-[#E11D48]'>4</p></div>
    
        <Separator orientation="vertical" />
        <div>OnLeave<p className='text-[#FFA200]'>1</p></div>
        <Separator orientation="vertical" />
        <div>Percentage<p className='text-[#9747FF]'>95%</p></div>
      </div>
    </div>
  <Table className=" table-auto lg:text-[14px] sm:text-[10px] mt-9">
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
                className={`font-montserrat text-black rounded-[50%] text-[9px]  p-1 inline-block`}
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

      </CardContent>
    </Card>
      
    </div>
    </div>
  )
}

export default StudentReport