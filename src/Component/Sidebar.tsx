import React, { useState } from 'react'
import Logo from '../assets/logo.svg'
import { MdMenu } from "react-icons/md";
import { FaChartPie } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { FaClipboardList } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { PiNumberCircleSevenLight } from "react-icons/pi";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { FaUserGroup } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const Sidebar:React.FC = () => {

  const [hover,sethover]=useState<boolean>(false)
  return (
    <div className='fixed left font-medium font-montserrat lg:w-[20%] h-[100vh] sm:w-[70%]'>
         <div className='flex justify-between w-[100%] items-center p-2 h-[15%]' >
            <img src={Logo} alt='logo'/>
            <MdMenu className='text-[bg-slate-500] text-medium' />
         </div>
         <ul className='p-2 font-medium 4-xl hover:cursor-pointer h-[85%] flex-col gap-10 '> 
            <Link to=''>
            <li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white'>
            <FaChartPie size={18}/> Dashboard
            </li></Link>
            <Link to='/classes'>
            <li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white'>
            <FaUserGroup size={18}/>   Classes
            </li></Link>
            
            <details>
              <summary className='flex items-center justify-between gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white' onClick={()=>{
                sethover(!hover)
              }}>
              <li className='flex items-center gap-2.5'><PiUsersThree size={18} />Students</li>  {hover? < IoIosArrowDown size={18}  />:<IoIosArrowUp size={18}  /> }
              </summary>
              <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:bg-[rgb(205,200,200)]">
                Attendance
                </li>

                <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:bg-[rgb(205,200,200)]">Result</li>
                <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:bg-[rgb(205,200,200)]">Report</li>
            </details>

           <Link to='/datesheet'><li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white'>
            <RiCalendarScheduleLine size={18} /> Datesheet
            </li></Link> 
            <li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white'>
            <RiCalendarScheduleLine size={18}/> Timetable
            </li>
            <li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white'>
            <PiNumberCircleSevenLight size={20} /> Events
            </li>
            <li className='flex items-center gap-2.5 rounded-[9px] font-montserrat p-[14px] text-[14px] font-medium duration-300 ease-in-out bg-white hover:bg-[#124FA0] text-black hover:text-white '>
            <FaClipboardList size={18} /> Notice Board
            </li>
       </ul>
    </div>
  )
}

export default Sidebar