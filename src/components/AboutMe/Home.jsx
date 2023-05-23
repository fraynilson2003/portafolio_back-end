import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import ReactDOMServer from 'react-dom/server';

import AngImg from "../../assets/avatarAng/splash-ang.png"

import { Tooltip } from 'react-tooltip';
import { optionLinks } from './NavAboutMe';
import { Link } from 'react-scroll';

export default function Home() {



  return (
    <div id={optionLinks.home} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row max-w-[1400px]'>
  
      <div className="flex-1 flex items-center mx-1 md:mx-6 md:w-[50%] h-full overflow-hidden z-[115] font-primary ">
        <motion.div
          variants={fadeIn("right", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          transition={{ duration: 1 }}

          className='flex flex-col h-full items-center justify-center '>

          <h1 
            className='flex justify-center mt-2 mb-10 px-4 text-3xl md:text-4xl font-cuarto text-center '>
            Backend Developer & Frontend Developer <br />
            Open Source
          </h1>

          <p className='w-full text-green my-1 mb-2 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
            {"Developer:  "} <span className=' font-secondary text-font_primary font-semibold text-xl text-center md:text-start '>
            Fray Toledo Tapia
          </span>
          </p>

          


          <p className='w-full text-green my-1 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
            {"Frontend Technologies:  "}
          </p>

          <p className='w-full  mb-2 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
            TS & JS & React & Tailwind
          </p>

  
          <p 
            data-tooltip-id="my-tooltip"
            data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div>greater ability as <b>backend</b> developer</div>)}
            className='w-full text-green  my-1 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
            {"Backend Technologies:  "}
          </p>

          <Tooltip  id="my-tooltip" />


          <p className='w-full  mb-3 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
          <TypeAnimation 
              sequence={[
                "Typescript & Javascript & Python",
                2000,
                "Frameworks - Express & Django-rest",
                2000,
                "DB - Mysql, PostgreSQL, sqlite",
                2000,

              ]}
              speed={50}
              className="text-accent  h-[50px]  md:h-[40px]"
              wrapper='p'
              repeat={Infinity}/>             
          </p>

          <div className='flex flex-row mt-6 md:mt-4 w-full justify-center md:justify-start font-semibold font-secondary text-base 
            mb-20 md:mb-0'>
            
            {/* <button className='w-[110px] mx-3 py-2 button-1 hover:brightness-125 rounded-full text-center'>
              <a>
                  Contact me
              </a>
            </button> */}
      
            <Link 
              id='option-scroll'
              containerId="per-scroll"
              to={optionLinks.services} 
              className="w-[110px] mx-3 py-2 button-1 hover:brightness-125 rounded-full text-center cursor-pointer"
              smooth={true}
              duration={800}
              spy={true}>
              Contact me

            </Link>


            <button className='w-[110px] mx-3 py-2 button-2 hover:brightness-125 rounded-full text-center'>
            <a href='https://www.linkedin.com/in/fray-desarrolador/' target="_blank" rel="noopener noreferrer">
                  Linkedin
              </a>
            </button>
          </div>

        </motion.div>
      </div >

      <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:relative absolute'>
        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='w-full flex justify-center items-center h-full'  
          >

          <div className="w-full flex justify-center h-[90%] max-h-[500px] overflow-hidden relative">
            <img 
              className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100 filter drop-shadow-2xl sombra
                text-green hover:brightness-110" 
              src={AngImg} 
              alt="Ang" />

          </div>


        </motion.div>
      </div>

    </div>
 


  )
}
