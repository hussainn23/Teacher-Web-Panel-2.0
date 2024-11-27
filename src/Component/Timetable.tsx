import { Button } from '@/components/ui/button';
import React from 'react'
import {
    Table,
    TableBody,
  
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "../components/ui/table"
const Timetable:React.FC = () => {
    interface Slot{
        subject:string,
        teacher:string,
        room:string
    }
    interface TIMETABLE{
        Days:string,
        slot1:Slot,
        slot2:Slot,
        slot3:Slot,
        slot4:Slot,
        slot5:Slot,
        slot6:Slot
    }
    const timetable: TIMETABLE[] = [
        {
            Days: 'Monday',
            slot1: { subject: 'Math', teacher: 'Mr. John (Professor)', room: 'Room-101' },
            slot2: { subject: 'Physics', teacher: 'Ms. Sarah (Professor)', room: 'Room-102' },
            slot3: { subject: 'Chemistry', teacher: 'Dr. Richard (Lecturer)', room: 'Room-103' },
            slot4: { subject: 'English', teacher: 'Ms. Emma (Professor)', room: 'Room-104' },
            slot5: { subject: 'History', teacher: 'Mr. David (Lecturer)', room: 'Room-105' },
            slot6: { subject: 'PE', teacher: 'Coach Steve', room: 'Gym' },
        },
        {
            Days: 'Tuesday',
            slot1: { subject: 'Biology', teacher: 'Dr. Alice (Professor)', room: 'Room-201' },
            slot2: { subject: 'Math', teacher: 'Mr. John (Professor)', room: 'Room-101' },
            slot3: { subject: 'Computer Science', teacher: 'Ms. Julia (Lecturer)', room: 'Lab-1' },
            slot4: { subject: 'Physics', teacher: 'Ms. Sarah (Professor)', room: 'Room-102' },
            slot5: { subject: 'Art', teacher: 'Mr. Blake (Lecturer)', room: 'Room-202' },
            slot6: { subject: 'Music', teacher: 'Ms. Olivia', room: 'Auditorium' },
        },
        {
            Days: 'Wednesday',
            slot1: { subject: 'Math', teacher: 'Mr. John (Professor)', room: 'Room-101' },
            slot2: { subject: 'Chemistry', teacher: 'Dr. Joseph (Lecturer)', room: 'Room-103' },
            slot3: { subject: 'Biology', teacher: 'Dr. Alice (Professor)', room: 'Room-201' },
            slot4: { subject: 'Physics', teacher: 'Ms. Sarah (Professor)', room: 'Room-102' },
            slot5: { subject: 'History', teacher: 'Mr. David (Lecturer)', room: 'Room-105' },
            slot6: { subject: 'English', teacher: 'Ms. Emma (Professor)', room: 'Room-104' },
        },
        {
            Days: 'Thursday',
            slot1: { subject: 'Computer Science', teacher: 'Ms. Julia (Lecturer)', room: 'Lab-1' },
            slot2: { subject: 'Math', teacher: 'Mr.John (Professor)', room: 'Room-101' },
            slot3: { subject: 'Physics', teacher: 'Ms.Sarah (Professor)', room: 'Room-102' },
            slot4: { subject: 'Chemistry', teacher: 'Dr.Joseph (Lecturer)', room: 'Room-103' },
            slot5: { subject: 'Art', teacher: 'Mr.Blake (Lecturer)', room: 'Room-202' },
            slot6: { subject: 'PE', teacher: 'Coach Steve', room: 'Gym' },
        },
        {
            Days: 'Friday',
            slot1: { subject: 'English', teacher: 'Ms.Emma (Professor)', room: 'Room-104' },
            slot2: { subject: 'History', teacher: 'Mr. David (Lecturer)', room: 'Room-105' },
            slot3: { subject: 'Math', teacher: 'Mr. John (Professor)', room: 'Room-101' },
            slot4: { subject: 'Biology', teacher: 'Dr. Alice (Professor)', room: 'Room-201' },
            slot5: { subject: 'Music', teacher: 'Ms. Olivia', room: 'Auditorium' },
            slot6: { subject: 'PE', teacher: 'Coach Steve', room: 'Room-101' },
        },
    ];
    
  return (
    <div className="box-border lg:w-[78vw] sm:w-[100vw] px-3 bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%] top-14 lg:p-2">
    <p className="text-[#4D515A] lg:text-[14px] sm:text-[10px] leading-3 py-2">
      Dashboard {">"} Timetable {">"}
    </p>
    <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6">
      Student Timetable
    </h1>
    <div className="bg-white rounded-md mt-3 p-4">
      <p className="text-[#4D515A] lg:text-[14px] sm:text-[10px] leading-3 py-2">
        Your Class
      </p>
      <Button className="bg-[#8B8E93]">Class 9A</Button>
    </div>
  
    <div className="mt-4 overflow-x-auto custom-scrollbar">
      <Table className="bg-white lg:text-[14px] sm:text-[12px] w-full">
        <TableHeader>
          <TableRow className="bg-[#FAF8FC] sm:text-[9px] lg:text-[14px]">
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              DAYS
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              8:00-9:00
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              9:00-10:00
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              10:00-11:00
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              11:00-12:00
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              12:00-01:00
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black min-w-[150px]">
              01:00-02:00
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="bg-white">
          {timetable.map((item) => (
            <TableRow
              key={item.Days}
              className="lg:text-[12px] sm:text-[9px]"
            >
              <TableCell className="py-4 font-bold lg:w-[100px] sm:w-[70px]">
                {item.Days}
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot1.subject}</span>
                <br />
                {item.slot1.teacher}
                <br />
                <span className="font-bold">{item.slot1.room}</span>
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot2.subject}</span>
                <br />
                {item.slot2.teacher}
                <br />
                <span className="font-bold">{item.slot2.room}</span>
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot3.subject}</span>
                <br />
                {item.slot3.teacher}
                <br />
                <span className="font-bold">{item.slot3.room}</span>
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot4.subject}</span>
                <br />
                {item.slot4.teacher}
                <br />
                <span className="font-bold">{item.slot4.room}</span>
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot5.subject}</span>
                <br />
                {item.slot5.teacher}
                <br />
                <span className="font-bold">{item.slot5.room}</span>
              </TableCell>
              <TableCell className="font-medium py-4">
                <span className="font-bold">{item.slot6.subject}</span>
                <br />
                {item.slot6.teacher}
                <br />
                <span className="font-bold">{item.slot6.room}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  </div>
  
   
    
  )
}

export default Timetable