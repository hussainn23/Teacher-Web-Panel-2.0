import React, { ReactElement } from 'react'
interface Props{
    text:string,
    icon:ReactElement,
    color:string
}
 const Button:React.FC<Props>= ({text,icon,color}) => {
  return (
    <button style={{backgroundColor:`${color}`}} className= 'flex gap-2 items-center  rounded-[9px] px-[11px] py-[9px] text-[#64748B]'> 
     {icon}
     {text}
  </button>
  
  )
}
export default Button