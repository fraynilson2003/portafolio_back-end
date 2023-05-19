import React, { useState } from "react";
import { AvatarIcon, Copyicon } from "../../SVG/icons";
import { optionLinks } from "../AboutMe/NavAboutMe";

import { BsBriefcase, BsChatSquareText} from "react-icons/bs"
import {BiHomeAlt, BiUser} from "react-icons/bi"

import { Link } from "react-scroll"

export default function AsideHome() {
  let [deployment, setDeployment] = useState(false)


  return (
      <ul className="hidden  md:flex flex-col relative h-full w-[46px] bg-left_barra items-center justify-between ">
  
        <div className='flex items-center w-full  z-[300] text-font_primary '>
          <div className='flex flex-col items-center w-full h-[40vh]    backdrop-blur-2x1'>

            <Link 
              id='option-scroll'
              containerId="per-scroll"
              to={optionLinks.home} 
              className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center overflow-hidden"
              activeClass='active-2-scroll  w-[46px]'
              smooth={true}
              spy={true}>
                <BiHomeAlt className="scale-[1.3]"/>
              </Link>

              <Link 
              id='option-scroll'
              containerId="per-scroll"
              to={optionLinks.about} 
              className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center"
              activeClass='active-2-scroll  w-[46px]'
              smooth={true}
              spy={true}>
                <BiUser className="scale-[1.3]"/>
              </Link>

              <Link 
              id='option-scroll'
              containerId="per-scroll"
              to={optionLinks.services} 
              className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center"
              activeClass='active-2-scroll  w-[46px]'
              smooth={true}
              spy={true}>
                <BsBriefcase className="scale-[1.3]"/>
              </Link>

              <Link 
              id='option-scroll'
              containerId="per-scroll"
              to={optionLinks.work} 
              className="cursor-pointer ml-[2px] w-[44px] mx-auto h-[46px] flex items-center justify-center"
              activeClass='active-2-scroll  w-[46px]'
              smooth={true}
              spy={true}>
                <BsChatSquareText className="scale-[1.3]"/>
              </Link>


          </div>
        </div> 


        <li className="flex w-full justify-center bottom-0 pb-2 cursor-pointer">
          <AvatarIcon width={30} height={30} />
        </li>
          

      </ul>

  );
}
