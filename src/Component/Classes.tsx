import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { PiCaretUpDownFill } from "react-icons/pi";

const Classes: React.FC = () => {
  const [Class, setClass] = useState<string>(""); 
  const [section, setSection] = useState<
    Array<{
      id: number;
      class_id: number;
      medium: string;
      teacher_id: number;
      section_name: string;
      description: string;
    }>
  >([]);

  const [Classdata, setClassdata] = useState<
    Array<{ id: number; name: string }>
  >([]); 

  interface Detail {
    SR: number;
    class: number;
    section: string;
    // total_student: number; 
  }

  const [details, setDetails] = useState<Detail[]>([]);

 
  const fetchClass = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const response = await axios.get(
        "https://school-management-school-system.e5fb6t.easypanel.host/api/classes",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const classList = response.data.data.map((classItem: { id: number; name: string }) => ({
        id: classItem.id,
        name: classItem.name,
      }));
      setClassdata(classList);
    } 
    catch (error) {
      console.log(`Error occurred while loading data: ${error}`);
    }
  };

 
  const fetchSection = async () => {
    const token = localStorage.getItem("accessToken");
    try {
      const responseSection = await axios.get(
        "https://school-management-school-system.e5fb6t.easypanel.host/api/sections",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setSection(responseSection.data.data);
    } catch (error) {
      console.log(`Error occurred while loading data: ${error}`);
    }
  };


  useEffect(() => {
    if (Classdata.length > 0 && section.length > 0) {
      const newDetail: Detail[] = [];
      Classdata.forEach((classItem) => {
        section.forEach((sectionItem) => {
          if (classItem.id === sectionItem.class_id) {
            newDetail.push({
              SR: newDetail.length + 1, 
              class: classItem.id,
              section: sectionItem.section_name,
            });
          }
        });
      });
      setDetails(newDetail);
    }
  }, [Classdata, section]);

  useEffect(() => {
    fetchClass();
    fetchSection();
  }, []);

  return (
    <div className="lg:w-[80%] sm:w-[100%] bg-[#F6F5FA] relative lg:text-[14px] sm:text-[10px] sm:left-0 lg:left-[20%] top-14 p-2">
      <p className="text-[#4D515A] font-montserrat leading-3 py-2">
        Dashboard {">"} Classes {">"}
      </p>
      <div className="flex items-center gap-[12px] px-[2]">
        <h1 className="font-montserrat text-[22px] font-bold leading-6 ">Classes</h1>
        <Select value={Class} onValueChange={(value) => setClass(value)}>
          <SelectTrigger className="w-[280px]">
            <SelectValue placeholder="--" />
          </SelectTrigger>
          <SelectContent>
            {Classdata.map((classItem) => (
              <SelectItem key={classItem.id} value={classItem.name}>
                {classItem.id}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Table className="bg-white mt-3 lg:text-[14px] sm:text-[10px] sm:mt-11">
        <TableHeader>
          <TableRow className="bg-[#F8FAFC]">
            <TableHead className="font-montserrat font-bold text-black">
              <p className="flex items-center">
                SR#
                <PiCaretUpDownFill />
              </p>
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black">
              <p className="flex items-center">
                CLASSES
                <PiCaretUpDownFill />
              </p>
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black">
              <p className="flex items-center">
                SECTION
                <PiCaretUpDownFill />
              </p>
            </TableHead>
            <TableHead className="font-montserrat font-bold text-black">
              <p className="flex items-center">
                TOTAL STUDENT
                <PiCaretUpDownFill />
              </p>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {details.map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium py-4">{item.SR}</TableCell>
              <TableCell>{item.class}</TableCell>
              <TableCell>{item.section}</TableCell>
              {/* <TableCell>{item.total_student}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Classes;
