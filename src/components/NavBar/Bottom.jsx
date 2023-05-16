import React from 'react'

export default function Bottom() {
  return (
    <nav className='relative bottom-0 flex flex-row h-[24px] min-h-[24px] max-h-[24px] justify-start items-center  bg-bottom_barra w-full min-w-full mx-0'>

      <li className='flex flex-row font-primary text-[12px] text-font_primary'>
        <ul className='block ml-2 mr-4'>Made in</ul>
        <ul className='block mx-2'>React</ul>
        <ul className='block mx-2'>Javascript</ul>
        <ul className='block mx-2'>Tailwind</ul>

      </li>
    </nav>
    
  )
}
