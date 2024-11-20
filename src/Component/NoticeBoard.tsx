import React, { useState } from "react";
import { CiCalendar } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,


} from "@/components/ui/card";

const NoticeBoard: React.FC = () => {
  const [active, setactive] = useState('');
  const notifications = [
    {
      title: "New Semester Start Date",
      date: "2 Sep, 2024",
      content:
        "The new semester will start from September 1st the new semester will start from Septembe....",
    },
    {
      title: "New Semester Start Date",
      date: "2 Sep, 2024",
      content:
        "The new semester will start from September 1st the new semester will start from Septembe....",
    },
    {
      title: "New Semester Start Date",
      date: "2 Sep, 2024",
      content:
        "The new semester will start from September 1st the new semester will start from Septembe....",
    },
    {
      title: "New Semester Start Date",
      date: "2 Sep, 2024",
      content:
        "The new semester will start from September 1st the new semester will start from Septembe....",
    },
  ];
  return (
    <div className="w-[100%]  bg-[#F6F5FA] font-montserrat relative sm:left-0 lg:left-[20%]  top-14 p-2 ">
      <p className="text-[#4D515A]  lg:text-[14px] sm:text-[10px] leading-3 py-2">
        Dashboard {">"} Noticeboard {">"}
      </p>
      <h1 className="font-montserrat lg:text-[22px] sm:text-[14px] font-bold leading-6 ">
        {" "}
        Notice Board
      </h1>
      <div className="w-[100%]  flex items-center gap-2 h-[100vh]  justify-arround sm:flex-col lg:flex-row">
        <div className="bg-white rounded-md lg:w-[25%] h-[90vh] sm:w-[100%]  ">
          <Card
            className={cn(
              "w-[100%] h-[100%] overflow-y-scroll custom-scrollbar"
            )}
          >
         
             
              <Tabs defaultValue="notices" className="w-[100%]">
              <TabsList className='w-[100%] bg-white'>
              <TabsTrigger className={`${active==='notices'? "py-3 text-[#1A55AF] border-b-2 border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('notices')}} value="notices"> Notices</TabsTrigger>
              <TabsTrigger  className={`${active==='announcements'? "py-3 border-b-2 text-[#1A55AF] border-[#1A55AF]":"text-[#707070]"}`} onClick={()=>{setactive('announcements')}}value="announcements">Announcements</TabsTrigger>
                </TabsList>
                <TabsContent value="notices">
                <CardContent className="w-[100%]  px-2">
              <h1 className="font-bold text-[14px]">Notices List</h1>
              <p className="text-[12px]">
                Click to check the list of all the notices below.
              </p>
              <div>
                {notifications.map((notification, index) => (
                  <div
                    key={index}
                    className=" rounded-md  shadow-lg border-[#E2E8F0] border-[1px] p-2 mt-3  w-[99%] text-[12px]"
                  >
                    <p className=" leading-none font-bold">
                      {notification.title}
                    </p>
                    <p className="text-[#727983]">{notification.date}</p>
                    <p className="text-[#727983] ">{notification.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            </TabsContent>
                <TabsContent value="announcements">
                      <h1>here goes announcements</h1>
                 </TabsContent>
              </Tabs>
           
           
          </Card>
        </div>
        <div className="bg-white rounded-md lg:w-[54%] sm:w-[100%] h-[90vh] px-3">
          <h1 className="font-bold text-[18px] ">New Semester Start Date</h1>
          <p className="text-[14px] text-[#919191] flex items-center gap-5">
            <span className="flex items-center gap-1">
              2,Sep 11:00-12:00 <CiCalendar size={20} />
            </span>

            <span className="flex items-center gap-1">
              <CiUser size={20} />
              Sabir Hassan
            </span>
          </p>{" "}
          <hr className="w-[100%] mt-3"></hr>
          <h2 className="font-bold text-[14px] mt-3">Notice Details</h2>
          <p className="text-[14px] text-[#4F6878]">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
            obscure Latin words, consectetur, from a Lorem Ipsum passage, and
            going through the cites of the word in classical literature,
            discovered the undoubtable source. Lorem Ipsum comes from sections
            1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a
            treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32.
            <br />
          </p>
          <p className="text-[14px] text-[#4F6878] mt-7">
            {" "}
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBoard;
