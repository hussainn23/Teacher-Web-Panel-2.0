import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import { useState } from "react";
import { MdLocalPrintshop } from "react-icons/md";
import { Button } from "../components/ui/button";

const StudentData: React.FC = () => {
  const [Classdata, setClassdata] = useState<{ id: string }[]>([]);
  const [sectiondata, setsectiondata] = useState<
    { id: string; class_id: string; name: string }[]
  >([]);
  const [studentsdata, setstudentdata] = useState<Student[]>([]);
  const [selectedClass, setSelectedClass] = useState<string>("");
  const [selectedSection, setSelectedSection] = useState<{
    id: string;
    name: string;
  }>({ id: "", name: "" });
  interface Student {
    class_id: string;
    section_id: string;
    reg_no: string;
    roll_no: string;
    name: String;
    status: String;
    cnic: string;
    email: string;
    phone: string;
  }
  let navigate = useNavigate();
  const handlePrint = () => {
    window.print();
  };
  const token = localStorage.getItem("accessToken");
  const fetchClass = async () => {
    try {
      const response = await axios.get(
        "https://school-management-school-system.e5fb6t.easypanel.host/api/classes",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const classData = response.data.data.map((classItem: { id: string }) => ({
        id: classItem.id,
      }));
      setClassdata(classData);
    } catch (error) {
      console.error("Error fetching classes:", error);
    }
  };
  const fetchSection = async () => {
    try {
      const response = await axios.get(
        "https://school-management-school-system.e5fb6t.easypanel.host/api/sections",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const sectionData = response.data.data.map(
        (section: { id: string; class_id: string; section_name: string }) => ({
          id: section.id,
          class_id: section.class_id,
          name: section.section_name,
        })
      );
      setsectiondata(sectionData);
      console.log("section", sectiondata);
    } catch (error) {
      console.error("Error fetching sections:", error);
    }
  };
  const fetchStudent = async () => {
    try {
      const response = await axios.get(
        "https://school-management-school-system.e5fb6t.easypanel.host/api/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const studentdata = response.data.data.map((student: any) => ({
        class_id: student.class_id,
        section_id: student.section_id,
        reg_no: student.student_reg_id,
        roll_no: student.roll_name,
        name: student.user.name,
        status: student.admission_status,
        cnic: student.cnic,
        email: student.user.email,
        phone: student.user.phone,
      }));

      setstudentdata(studentdata);
      console.log(studentsdata);
    } catch (error) {
      console.log(`Error occurred: ${error}`);
    }
  };
  useEffect(() => {
    fetchClass();
    fetchSection();
    fetchStudent();
  }, []);
  //creating section array that matches selected class for drop down
  const filteredSections = sectiondata.filter(
    (section) => section.class_id === selectedClass
  );
  //creating student  array that matches selected class and selected section
  const filteredStudents = studentsdata.filter(
    (student) =>
      student.class_id === selectedClass &&
      student.section_id == selectedSection.id
  );

  return (
    <div className="lg:w-[80%]   sm:w-[100%] bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
      <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
        Dashboard {">"} Students {">"}
      </p>
      <div className="flex justify-between w-[100%] lg:flex-row sm:flex-col gap-2 ">
        <div className="flex items-center gap-[12px] px-[2] ">
          <Button
            variant={"outline"}
            className="w-[44px]"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </Button>
          <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
            Students
          </h1>
        </div>
        <div className="flex gap-3  ">
          <Button variant={"outline"} onClick={handlePrint}>
            <MdLocalPrintshop />
            Print
          </Button>
        </div>
      </div>

      <div className="bg-white w-[100%] pt-[14px] mt-3">
        <div className="flex lg:flex-row sm:flex-col sm:w-[100%] lg:w-[50%]  py-[2px] px-[4px]  text-[12px] ">
          <div className="flex gap-1 sm:w-[100%] md:flex-col self-start sm:justify-between sm:items-center lg:items-start">
            <p>Select Class:</p>
            <Select
              onValueChange={(value) => setSelectedClass(value)}
              value={selectedClass}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Class" />
              </SelectTrigger>
              <SelectContent>
                {Classdata.map((classItem) => (
                  <SelectItem key={classItem.id} value={classItem.id}>
                    {classItem.id}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-1 w-[100%] md:flex-col self-start sm:justify-between sm:items-center lg:items-start">
            <p>Select Section:</p>
            <Select
              onValueChange={(value) => {
                const [id, name] = value.split("|");
                setSelectedSection({ id, name });
              }}
              value={
                selectedSection
                  ? `${selectedSection.id}|${selectedSection.name}`
                  : ""
              }
              disabled={filteredSections.length === 0}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                {filteredSections.map((section) => (
                  <SelectItem
                    key={section.id}
                    value={`${section.id}|${section.name}`}
                  >
                    {section.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        <Table className=" table-auto lg:text-[14px] mt-6 sm:text-[10px] w-[90vw]">
          <TableHeader className="bg-[#F8FAFC]">
            <TableRow>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 box-border  ">
                REG_NO
              </TableHead>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 box-border  ">
                ROLL_NO
              </TableHead>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 ">
                NAME
              </TableHead>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2 ">
                STATUS
              </TableHead>

              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  flex items-center ">
                CNIC
              </TableHead>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
                EMAIL
              </TableHead>
              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  ">
                PHONE
              </TableHead>

              <TableHead className="font-montserrat font-bold text-black text-left px-4 py-2  "></TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {(filteredStudents.length > 0
              ? filteredStudents
              : studentsdata
            ).map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.reg_no}
                </TableCell>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.roll_no}
                </TableCell>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.name}
                </TableCell>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.status}
                </TableCell>

                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.cnic}
                </TableCell>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.email}
                </TableCell>
                <TableCell className="font-medium py-4 px-4 min-w-[180px]">
                  {item.phone}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default StudentData;
