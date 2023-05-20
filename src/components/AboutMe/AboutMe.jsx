import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'


import KataraImg from "../../assets/avatarAng/splash-katara.png"
import { optionLinks } from './NavAboutMe'
import TextShpere from './TextShpere'

export default function AboutMe() {
          {/* <motion.div
            variants={fadeIn("right", 0.4 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}
            className='w-full flex justify-center items-center h-full'  
            >

            <div className="w-full flex justify-center h-[90%] max-h-[500px] overflow-hidden relative">
              <img 
                className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100 filter drop-shadow-2xl
                  text-green hover:brightness-110" 
                src={KataraImg} alt="Ang" />
            </div>


          </motion.div> */}

  return (
    <div id={optionLinks.about} className='flex flex-col-reverse h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 w-full justify-center max-w-[1400px] relative md:flex-row'>
  
      <div className='flex items-center flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden relative'>
         <motion.div
            variants={fadeIn("right", 0.4 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}
            className='w-full flex flex-colmax-h-[300px] md:max-h-[300px] relative justify-center items-center h-full'>

            {/* <h2 className='font-secondary text-2xl font-semibold'>
              Hobbies
            </h2>   */}
            <TextShpere />

  


          </motion.div>
      </div>

      <div className="flex-1 flex items-center  mx-6 md:w-[50%] h-full overflow-hidden  z-[115]">
        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col h-full items-center justify-center '>

          <h1 className='flex justify-center font-cuarto mt-2 mb-6 px-4 md:pr-10 md:pl-2 text-3xl font-semibold text-center'>
            About me
          </h1>


          <p className="mt-4 px-4 md:pr-10 md:pl-2 text-justify text-sm lg:text-base">
            Meet the Cyberpunk Coder: part hacker, part wizard. With a keyboard as a magic wand and lines of code as spells, he dances to binary rhythms and weaves dreams in the language of machines. His code is sharp and his creativity even sharper. In a world where bits and bytes reign supreme, this coder embraces the cyberpunk spirit and sits each day on his own throne from where he observes the funny world.          
          </p>  


          <div className='flex flex-row mt-8 w-full justify-center md:justify-end md:pr-10  font-semibold font-secondary text-base'>
            
            <button className='md:block hidden w-[110px] mx-3 py-2 button-3 hover:brightness-125 rounded-full text-center'>
              <a href='https://github.com/fraynilson2003' target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </button>
      

            <button className='md:block hidden w-[110px] mx-3 py-2 button-2 hover:brightness-125 rounded-full text-center'>
            <a href='https://www.linkedin.com/in/fray-desarrolador/' target="_blank" rel="noopener noreferrer">
                Linkedin
              </a>
            </button>
          </div>

        </motion.div>
      </div >

    </div>
  )
}

