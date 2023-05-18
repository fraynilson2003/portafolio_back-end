import React, { useState } from 'react'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from "react-icons/bs"
import {BiHomeAlt, BiUser} from "react-icons/bi"

import { Link } from "react-scroll"

export  const optionLinks = {
  home: "home",
  about: "about",
  services: "services",
  work: "work"
}

export default function NavAboutMe() {
  let [selectLink, setSelectLink] = useState(optionLinks.home)



  return (
    <div className='flex items-center fixed bottom-10 max-w-[300px] w-[60%] h-[50px] md:right-5 md:w-[45px] md:h-[calc(100vh-44px)] z-[200] '>
      <div className='flex flex-row md:flex-col justify-around items-center w-full h-[50px] md:h-[50vh] md:max-h-[350px] bg-font_trans/20  backdrop-blur-2x1 rounded-full'>

        <Link 
          id='option-scroll'
          containerId="per-scroll"
          to={optionLinks.home} 
          className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          activeClass='active-scroll'
          smooth={true}
          spy={true}>
            <BiHomeAlt/>
          </Link>

          <Link 
          id='option-scroll'
          containerId="per-scroll"
          to={optionLinks.about} 
          className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          activeClass='active-scroll'
          smooth={true}
          spy={true}>
            <BiUser/>
          </Link>

          <Link 
          id='option-scroll'
          containerId="per-scroll"
          to={optionLinks.services} 
          className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          activeClass='active-scroll'
          smooth={true}
          spy={true}>
            <BsBriefcase/>
          </Link>

          <Link 
          id='option-scroll'
          containerId="per-scroll"
          to={optionLinks.work} 
          className="cursor-pointer w-[35px] h-[35px] flex items-center justify-center"
          activeClass='active-scroll'
          smooth={true}
          spy={true}>
            <BsChatSquareText/>
          </Link>


      </div>
    </div>  )
}