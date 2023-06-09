import React from 'react'
import "./styleAbouteMe.css"

import NavAboutMe from './NavAboutMe'
import Home from './Home';
import AboutMe from './AboutMe'
import Projects from './Projects'
import Contact from './Contact';
import Skills from './Skills';



export default function About() {

//
  return (
    <div id='per-scroll' className='flex flex-1  flex-col div-gradient relative items-center h-[calc(100vh-44px)] max-h-[calc(100vh-44px)] 
      overflow-y-auto container-div  mx-auto text-font_primary snap-y scroll-smooth snap-mandatory'>
      {/* backdrop-blur-[1px] */}
      {/* menu */}
      <NavAboutMe/>

      {/* parte 1 */}
      <Home/>

      {/* parte 2 */}
      <AboutMe/>

      {/* parte 3 */}
      <Skills/>

      {/* parte 4 */}
      <Projects/>

      {/* parte 5 */}
      <Contact/>


    </div>
  )
}
