import React, { useState, useEffect} from 'react'
import Link from 'next/link';
import Menu from './menu';
import { BsFillCartFill, BsFillPersonFill } from "react-icons/bs";


export default function header() 
{
   const [mobileMenu, setMobileMenu]= useState(false);
    const [showCatMenu, setShowCatMenu] = useState(false);
    const [show, setShow] = useState("translate-y-0");
    const [lastScrollY, setLastScrollY] = useState(0);
  return (
    <header className={'w-full h-[35px] md:h-[30px] bg-gray-400 flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}'}>
      
      <img src="header2.png" className=" w-56 md:w-7 h-7 px-0 ml-10 "/>
      
      <div className="flex mt-2 mr-7 justify-end items-center gap-2">
      <Menu/>
            {/* icon start */}

            <Link href={"/"}><BsFillCartFill size={16}/></Link>
            <Link href={"/"}><BsFillPersonFill size={16}/></Link>


            {/* icon end */}
        </div>
    </header>
  )
}