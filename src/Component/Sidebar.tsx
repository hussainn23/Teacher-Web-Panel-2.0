import React, {  useState } from 'react'
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
  const [open,setopen]=useState<boolean>(false)

  return (
    <div className='fixed left font-medium   font-montserrat lg:w-[20%] h-[100vh] sm:w-[70vw] sm:z-30'>
         <div className='flex justify-between lg:w-[100%] sm:w-[60vw] lg:h-[10vh] sm:h-[7vh] bg-white box-border items-center p-2 h-[15%] sm:flex-row-reverse lg:flex-row' >
            <img src={Logo} alt='logo' className='sm:w-[50px] lg:w-[65px] lg:mt-1'/>
            <MdMenu className='text-[bg-slate-500] text-medium' onClick={()=>{setopen(!open)}} />
         </div>
         <div className={`bg-white relative transition-all duration-800 ease-in-out lg:left-[${open? '0%':'0%'}] sm:left-[${open ? '0%':'-250%'}]`} id='sidebar' style={{left:open?'-250%':"0%"}}>
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
             <Link to='/attendence'> <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:bg-[#F3F6FA]">
                Attendance
                </li></Link> 

               <Link to='result'>
               <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:hover:bg-[#F3F6FA]">Result</li>
               <li className="mx-[3rem] my-[1rem] text-[14px] p-[5px] rounded-[7px] font-medium bg-white hover:hover:bg-[#F3F6FA]">Report</li></Link>
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
        
    </div>
  )
}

export default Sidebar