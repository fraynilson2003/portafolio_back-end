import React, { useState } from "react";
import { AvatarIcon, Copyicon } from "../../SVG/icons";
import { optionLinks } from "../AboutMe/optionsLinks";

import { BsBriefcase, BsChatSquareText} from "react-icons/bs"
import {BiHomeAlt, BiUser} from "react-icons/bi"

import { Link } from "react-scroll"

export default function AsideAppDjango() {
  let [deployment, setDeployment] = useState(false)


  return (
      <ul className="hidden  md:flex flex-col relative h-full w-[46px] bg-left_barra items-center justify-between ">
  
        <div className='flex items-center w-full  z-[300] text-font_primary '>
          <div className='flex flex-col items-center w-full h-[40vh]    backdrop-blur-2x1'>

            <div 
              className="cursor-pointer active-2-scroll  w-[46px] mx-auto h-[46px] flex items-center justify-center overflow-hidden">
                <BiHomeAlt className="scale-[1.3]"/>
              </div>

          </div>
        </div> 


        <li className="flex w-full justify-center bottom-0 pb-2 cursor-pointer">
          <AvatarIcon width={30} height={30} />
        </li>
          

      </ul>

  );
}
