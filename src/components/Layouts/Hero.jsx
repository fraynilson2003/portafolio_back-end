import React from 'react'
import Aside from './Aside'
import DjangoApp from '../../apps/apis/DjangoPython/DjangoApp'
import { sectionsApp } from './constants'
import AbouteMe from '../AboutMe/AbouteMe'

export default function Hero({ section }) {


  return (
    <div className='flex flex-grow flex-row w-full bg-primary'>
      <Aside/>

      {section == sectionsApp.aboutMe? (
      <div className='flex-1'>
        <AbouteMe/>
      </div>
      ):<></>}

      {section == sectionsApp.myProject_2? (
      <div className='flex-1'>
        <DjangoApp/>
      </div>
      ):<></>}



    </div>
  )
}
