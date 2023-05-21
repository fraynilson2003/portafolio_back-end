import React from 'react'
import { sectionsApp } from '../Layouts/constants'
import { useDispatch, useSelector } from 'react-redux'
import { putStateSectionApp } from '../../redux/actions/actions'

export default function NavBar() {
  let stateSectionApp = useSelector(state=>state.stateSectionApp)
  let dispatch = useDispatch()

  const changeSection = (section)=>{
    dispatch(putStateSectionApp(section))
  }


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
          onClick={()=>changeSection(sectionsApp.aboutMe)}
          className={`block px-2  text-center cursor-pointer h-full ${stateSectionApp === sectionsApp.aboutMe? "bg-font_trans/40" : ""}`}>
              About me
        </ul>

        {/* <ul 
          onClick={()=>changeSection(sectionsApp.myProject_1)}
          className={`block px-2 cursor-pointer h-full ${stateSectionApp === sectionsApp.myProject_1? "bg-font_trans/40" : ""}`}>
      
            My project 1

        </ul> */}

        <ul 
          onClick={()=>changeSection(sectionsApp.myProject_2)}
          className={`block px-2 text-center cursor-pointer h-full ${stateSectionApp === sectionsApp.myProject_2? "bg-font_trans/40" : ""}`}>
            Project api
        </ul>

        <ul 
          onClick={()=>changeSection(sectionsApp.skills)}
          className={`block px-2  text-center cursor-pointer h-full ${stateSectionApp === sectionsApp.skills? "bg-font_trans/40" : ""}`}>
           Developing
        </ul>

      </li>
    </nav>
  )
}
