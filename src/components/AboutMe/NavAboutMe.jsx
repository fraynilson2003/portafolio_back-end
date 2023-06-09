import React, { useState } from 'react'
import {BsClipboardData, BsBriefcase, BsChatSquareText, } from "react-icons/bs"
import {BiHomeAlt, BiUser, } from "react-icons/bi"
import { VscChecklist } from "react-icons/vsc";
import { Link } from "react-scroll"
import { optionLinks } from './optionsLinks';



export default function NavAboutMe() {
  const handleScroll = (linkContainer) => {
    const targetElement = document.querySelector(`#${linkContainer}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className='flex items-center fixed bottom-10 max-w-[300px] w-[80%] h-[50px] md:right-5 md:w-[45px] md:h-[calc(100vh-44px)] z-[200] md:hidden'>
      <div className='flex flex-row md:flex-col justify-around items-center w-full h-[50px] md:h-[50vh] md:max-h-[350px] bg-font_trans/40  backdrop-blur-2x1 rounded-full'>

          <div 
            onClick={()=>handleScroll(optionLinks.home)}
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          >
            <BiHomeAlt/>
          </div>

          <div 
            onClick={()=>handleScroll(optionLinks.about)}
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          >
            <BiUser/>
          </div>


          <div 
            onClick={()=>handleScroll(optionLinks.skills)}
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          >
            <VscChecklist/>
          </div>

          <div 
            onClick={()=>handleScroll(optionLinks.work)}
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          >
            <BsBriefcase/>
          </div>

          <div 
            onClick={()=>handleScroll(optionLinks.services)}
            className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          >
            <BsChatSquareText/>
          </div>


          

      </div>
    </div>  
  )
}
