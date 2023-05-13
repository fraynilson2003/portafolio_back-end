import React from 'react'

export default function NavBar() {
  return (
    <nav className='relative flex flex-row h-[28px] justify-start items-center  bg-top_barra w-full min-w-full mx-0 top-0'>

      <div className="px-2 ">
        <img
          className="w-[19px]"
          src="https://img.icons8.com/color/96/000000/visual-studio-code-2019.png"
          alt="Visual Studio Code Styled Portofolio Icon"
          width="60"
          height="60"
        />
      </div>

      <li className='flex flex-row font-primary text-[12px] text-font_primary'>
        <ul className='block mx-2 cursor-pointer'>About</ul>
        <ul className='block mx-2 cursor-pointer'>Experience</ul>
        <ul className='block mx-2 cursor-pointer'>Skills</ul>
        <ul className='block mx-2 cursor-pointer'>Contact</ul>

      </li>
    </nav>
  )
}
