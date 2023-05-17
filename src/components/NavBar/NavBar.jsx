import React from 'react'
import { sectionsApp } from '../Layouts/constants'

export default function NavBar({ section, setSection }) {

  return (
    <nav className='relative flex flex-row h-[20px] min-h-[20px] max-h-[20px] justify-start items-center  bg-top_barra w-full min-w-full mx-0 top-0'>

      <div className="flex justify-center w-[46px]">
        <img
          className="w-[18px]"
          src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
          alt="Visual Studio Code Styled Portofolio Icon"
          width="60"
          height="60"
        />
      </div>

      <li className='flex flex-row items-center min-h-[20px] h-[20px] font-primary text-[12px] text-font_primary font-semibold'>
        <ul 
          onClick={()=>setSection(sectionsApp.aboutMe)}
          className={`block px-2 cursor-pointer h-full ${section === sectionsApp.aboutMe? "bg-font_trans/40" : ""}`}>
          About me
        </ul>

        <ul 
          onClick={()=>setSection(sectionsApp.myProject_1)}
          className={`block px-2 cursor-pointer h-full ${section === sectionsApp.myProject_1? "bg-font_trans/40" : ""}`}>
          My project 1
        </ul>

        <ul 
          onClick={()=>setSection(sectionsApp.myProject_2)}
          className={`block px-2 cursor-pointer h-full ${section === sectionsApp.myProject_2? "bg-font_trans/40" : ""}`}>
          My project 2
        </ul>

        <ul 
          onClick={()=>setSection(sectionsApp.skills)}
          className={`block px-2 cursor-pointer h-full ${section === sectionsApp.skills? "bg-font_trans/40" : ""}`}>
          Skills
        </ul>

      </li>
    </nav>
  )
}
