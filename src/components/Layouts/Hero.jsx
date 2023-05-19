import React from 'react'
import AsideHome from './AsideHome'
import DjangoApp from '../../apps/apis/DjangoPython/DjangoApp'
import { sectionsApp } from './constants'
import About from '../AboutMe/About'
import { Route, Routes } from 'react-router-dom'
import AsideApp2 from './AsideApp2'

export default function Hero({ section }) {


  return (
    <div className='flex flex-grow flex-row w-full bg-primary'>



      {section == sectionsApp.aboutMe? (
        <>
          <AsideHome/>
          <About/>
        </>
      ):<></>}

      {section == sectionsApp.myProject_2? (
        <>
          <AsideApp2/>
          <div className='flex-1'>
            <DjangoApp/>
          </div>
        </>
      ):<></>}



    </div>
  )
}
