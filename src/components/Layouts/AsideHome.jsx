import React, { useState } from "react";
import { AvatarIcon, Copyicon } from "../../SVG/icons";
import { VscChecklist } from "react-icons/vsc";

import { BsBriefcase, BsChatSquareText} from "react-icons/bs"
import {BiHomeAlt, BiUser} from "react-icons/bi"
import { optionLinks } from "../AboutMe/optionsLinks";


export default function AsideHome() {

  const handleScroll = (linkContainer) => {
    const targetElement = document.querySelector(`#${linkContainer}`);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeClass = "active-2-scroll w-[46px]"

  return (
      <ul className="hidden  md:flex flex-col relative h-full w-[46px] bg-left_barra items-center justify-between ">
  
        <div className='flex items-center w-full  z-[300] text-font_primary '>
          <div className='flex flex-col items-center w-full h-[40vh]    backdrop-blur-2x1'>

              <div 
                className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
                onClick={()=>handleScroll(optionLinks.home)}
              >
                <BiHomeAlt className="scale-[1.3]"/>
              </div>

              <div 
                className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
                onClick={()=>handleScroll(optionLinks.about)}
              >
                <BiUser className="scale-[1.3]"/>
              </div>

              <div 
                className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
                onClick={()=>handleScroll(optionLinks.skills)}
              >
                <VscChecklist className="scale-[1.3]"/>
              </div>

              <div 
                className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
                onClick={()=>handleScroll(optionLinks.work)}
              >
                <BsBriefcase className="scale-[1.3]"/>
              </div>


              <div 
                className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
                onClick={()=>handleScroll(optionLinks.services)}
              >
                <BsChatSquareText className="scale-[1.3]"/>
              </div>


          </div>
        </div> 


        <li className="flex w-full justify-center bottom-0 pb-2 cursor-pointer">
          <AvatarIcon width={30} height={30} />
        </li>
          

      </ul>

  );
}
