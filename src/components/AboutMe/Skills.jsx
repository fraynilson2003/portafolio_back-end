import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { 
  DiDjango,
  DiPython,  
  DiHtml5,
  DiJsBadge,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPostgresql,
  DiReact
  } from "react-icons/di";

import { SiJavascript, SiSequelize } from "react-icons/si";

import { TbBrandTypescript } from "react-icons/tb";


import KataraImgEsp from "../../assets/avatarAng/splash-katara_espejo.png"

import { optionLinks } from './NavAboutMe';

export default function Skills() {



  return (
    <div id={optionLinks.skills} className='flex flex-col-reverse h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 w-full justify-center max-w-[1400px] relative md:flex-row'>
  
      <div className="flex-1 flex items-center mx-1 md:mx-6 md:w-[50%] justify-center h-full overflow-hidden z-[115] font-primary ">
        <motion.div
          variants={fadeIn("right", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          transition={{ duration: 1 }}

          className='flex flex-col h-full w-full items-center justify-center '>

          <h1 
            className='flex justify-center mt-2 px-4 text-3xl md:text-4xl font-cuarto text-center '>
              Skills
          </h1>

          {/* 
          <p className='w-full text-green my-1 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
            {"Tecnologies fronted:  "}
          </p>*/}

          <p className='w-full mt-3 md:mt-10  mb-2 font-secondary font-semibold text-xl px-8 text-center md:text-start '>
            TS & JS & React & Tailwind
          </p> 

          <div className='flex flex-wrap text-sm justify-between items-stretch gap-2 w-full h-[60vh] md:h-[250px] p-4'>
            

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <TbBrandTypescript className='scale-[2.4] h-[40px]'/>
              <span className='w-full text-center'>TypeScript</span>
            </div>

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiJsBadge className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>JavaScript</span>
            </div>

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiPython className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>Python</span>
            </div>            


            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiNodejsSmall className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>Node.js</span>
            </div>

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiDjango className='scale-[4] h-[40px]'/>
            </div>

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiReact className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>React</span>
            </div>


            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiMysql className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>Mysql</span>
            </div>


            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiPostgresql className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>Postgresql</span>
            </div>

            <div className='flex flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <DiMongodb className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>MongoDB</span>
            </div>
            
            <div className='flex  flex-col justify-center items-center w-[100px] h-[60px] bga'>
              <SiSequelize className='scale-[2] h-[40px]'/>
              <span className='w-full text-center'>Sequelize</span>
            </div>


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
              src={KataraImgEsp} 
              alt="Katara" />

          </div>


        </motion.div>
      </div>

    </div>
 


  )
}
