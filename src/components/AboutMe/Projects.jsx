import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { TypeAnimation } from 'react-type-animation'

import TophImg from "../../assets/avatarAng/splash-toph.png"
import apiDjango from "../../assets/projects/api django.png"
import appVideogames from "../../assets/projects/app videogames.png"

import { optionLinks } from './NavAboutMe'

export default function Projects() {


  return (
    <div id={optionLinks.work} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row max-w-[1400px]'>
      
      <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:relative absolute'>
        <motion.div
          variants={fadeIn("right", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          exit={{ opacity: 100 }}
          className='w-full flex justify-center items-center h-full'  
          >

          <div className="w-full flex justify-center h-[90%] max-h-[500px] overflow-hidden relative">
            <img 
              className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100 filter drop-shadow-2xl
              text-green hover:brightness-110" 
              src={TophImg} 
              alt="Ang" />

          </div>


        </motion.div>
      </div>


      <div className="flex-1 flex items-center  mx-6 md:w-[50%]  overflow-hidden  z-[115]">
        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col h-auto items-center justify-center '>

          <h1 className='flex justify-center font-cuarto mt-2 mb-6 px-4 md:pr-10 md:pl-2 text-3xl font-semibold text-center'>
            Projects
          </h1>

          <p className="w-full mt-2 px-4 md:pr-10 md:pl-2 text-start text-lg">
            These are some of the projects that I have carried out: 
          </p>    


          <div className='flex flex-wrap h-auto w-full mt-6s md:mt-3 gap-2'>
            {/* image 1*/}
            <div className="group w-[42%] max-w-[240px] mx-auto my-2 min-w-[220px] bg-red/50 relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */} 
              <img src={appVideogames} alt="apiDjango" className="group-hover:scale-125 group-hover:brightness-50 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-300 z-50">
                <span className="text-gradient">
                    UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-8 transition-all duration-500 z-50">
               <span span className="text-xl text-white sombra">
                <a href='https://videogames-portafolio.vercel.app/' target="_blank" rel="noopener noreferrer">
                    Tundra Wolf
                  </a>
                </span>
              </div>

            </div>

            {/* image 2*/}
            <div className="group w-[42%] max-w-[240px] mx-auto my-2 min-w-[220px] bg-red/50 relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
        
              <img src={apiDjango} alt="apiDjango" className="group-hover:scale-125 group-hover:brightness-50 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-300 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-8 transition-all duration-500 z-50">
               <span span className="text-xl text-white sombra">
                  Project Tittle
                </span>
              </div>

            </div>    

            {/* image 3*/}
            <div className="group w-[42%] max-w-[240px] mx-auto my-2 min-w-[220px] bg-red/50 relative overflow-hidden border-2 border-white/50 rounded-xl">
              {/* overlay */}
        
              <img src={apiDjango} alt="img1" className="group-hover:scale-125 group-hover:brightness-50 transition-all duration-400" />
              {/* pretittle  */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-14 transition-all duration-300 z-50">
                <span className="text-gradient">
                  UI/UX Design
                </span>
              </div>

              {/* tittle */}
              <div className="absolute -bottom-full left-4 group-hover:bottom-8 transition-all duration-500 z-50">
               <span span className="text-xl text-white sombra">
                  Project Tittle
                </span>
              </div>

            </div> 

            {/* image 4*/}
          
          </div>
     



        </motion.div>
      </div >

    </div>
  )
}

