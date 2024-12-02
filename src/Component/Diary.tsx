import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaPrint } from "react-icons/fa6";

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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";

import { PiCaretUpDownFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
const Diary: React.FC = () => {
  const [Class, setclass] = useState<string>("");
  const [section, setsection] = useState<string>("");
  const [subject, setsubject] = useState<string>("");
  interface Detail {
    class: string;
    section: string;
    subject: string;
  }
  const detail: Detail[] = [
    {
      class: "10th",
      section: "A",
      subject: "English",
    },
    {
      class: "10th",
      section: "B",
      subject: "Mathematics",
    },
    {
      class: "9th",
      section: "A",
      subject: "Science",
    },
    {
      class: "9th",
      section: "B",
      subject: "History",
    },
    {
      class: "8th",
      section: "C",
      subject: "Geography",
    },
    {
      class: "8th",
      section: "A",
      subject: "English",
    },
  ];

  return (
    <div className="lg:w-[78vw] sm:w-[100vw] bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
      <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
        Dashboard {">"} Diary {">"}
      </p>
      <div className="flex lg:items-center sm:items-start gap-2 justify-between w-[80%] lg:flex-row sm:flex-col">
        <div className="flex lg:items-center sm:items-start gap-4 lg:flex-row sm:flex-col">
          <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
            Diary
          </h1>
          <Select
            value={Class}
            onValueChange={(value) => {
              setclass(value);
            }}
          >
            <SelectTrigger className="lg:w-[180px] sm:w-[90vw]">
              <SelectValue placeholder="Select Class" />
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
          <Select
            value={section}
            onValueChange={(value) => {
              setsection(value);
            }}
          >
            <SelectTrigger className="lg:w-[180px] sm:w-[90vw]">
              <SelectValue placeholder="Select Section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="A">A</SelectItem>
              <SelectItem value="B">B</SelectItem>
              <SelectItem value="C">C</SelectItem>
              <SelectItem value="D">D</SelectItem>
            </SelectContent>
          </Select>
          <Select
            value={subject}
            onValueChange={(value) => {
              setsubject(value);
            }}
          >
            <SelectTrigger className="lg:w-[180px] sm:w-[90vw]">
              <SelectValue placeholder="Select Subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="English">English</SelectItem>
              <SelectItem value="Mathematics">Mathematics</SelectItem>
              <SelectItem value="Science">Science</SelectItem>
              <SelectItem value="History">History</SelectItem>
              <SelectItem value="Geography">Geography</SelectItem>
            </SelectContent>
          </Select>
          <Button className="bg-[#1A55A5] text-[white]">Get</Button>
        </div>
        <Button variant={"outline"} className="text-[#1A55A5]">
          <FaPrint />
          Print
        </Button>
      </div>
      <Table className="bg-white mt-3 lg:text-[14px] sm:text-[10px]  sm:mt-11">
        <TableHeader>
          <TableRow className="bg-[#F8FAFC]">
            <TableHead className="font-montserrat font-bold text-black ">
              <p className="flex items-center">
                CLASS
                <PiCaretUpDownFill />
              </p>
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black  ">
              <p className="flex items-center">
                SECTION
                <PiCaretUpDownFill />
              </p>
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black  ">
              <p className="flex items-center">
                SUBJECT
                <PiCaretUpDownFill />
              </p>
            </TableHead>

            <TableHead className="font-montserrat font-bold text-black  ">
              <p className="flex items-center">
                ADD DIARY
                <PiCaretUpDownFill />
              </p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {detail.map((item) => (
            <TableRow>
              <TableCell className="font-medium py-4">{item.class}</TableCell>

              <TableCell>{item.section}</TableCell>
              <TableCell>{item.subject}</TableCell>
              <TableCell>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant={"left"}>
                      <FaArrowRightLong size={24} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="lg:max-w-[625px] sm:w-[90vw]">
                    <DialogHeader className="flex flex-col ">
                      <DialogTitle> ADD DIARY</DialogTitle>
                      <DialogDescription className=" cursor-pointer flex lg:items-center gap-4 lg:flex-row sm:flex-col sm:items-start">
                     
                        <div className="border-[1.5px] rounded-md px-2 py-2 w-[33%] text-center"><span className="font-bold">Class: </span>{item.class}</div>
                        <div className="border-[1.5px] rounded-md px-2 py-2 w-[33%] text-center"><span className="font-bold">Section:</span> {item.section}</div>
                        <div className="border-[1.5px] rounded-md px-2 py-2 w-[33%] text-center"><span className="font-bold">Subject:</span> {item.subject}</div>
                      </DialogDescription>
                    </DialogHeader>
                    <DialogDescription>
                      <Textarea />
                    </DialogDescription>
                    <DialogFooter className="border-t-[1px] py-2">
                      <Button variant={"outline"}>Cancel</Button>
                      <Button className="bg-[#1A55A5]">ADD</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Diary;
