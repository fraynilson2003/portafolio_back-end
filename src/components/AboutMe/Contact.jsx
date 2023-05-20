import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"

import ZukoImg from "../../assets/avatarAng/splash-zuko.png"
import { optionLinks } from './NavAboutMe'
import { BiCopyright } from 'react-icons/bi'

export default function Contact() {

  let submitForm = (event)=>{
    event.preventDefault()
  }

  return (
    <div id={optionLinks.services} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 w-full relative md:flex-row max-w-[1400px]'>
      
      {/* image zuko */}
      <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:hidden absolute'>
        <motion.div
          variants={fadeIn("right", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='w-full flex justify-center items-center h-full'  
          >

          <div className="w-full flex justify-center h-[90%] max-h-[500px] overflow-hidden relative">
            <img 
              className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-95 filter drop-shadow-2xl
              text-green hover:brightness-105" 
              src={ZukoImg} 
              alt="Ang" />
          </div>


        </motion.div>
      </div>



      <div className="flex-1 flex flex-col md:flex-row justify-center items-center  mx-6 w-full h-full overflow-hidden max-w-[1400px] z-[115]">

        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col w-full md:w-[50%] h-auto md:h-[400px] 
            items-center justify-center  '>

          <h1 
            className='flex justify-center mt-2 px-4 text-3xl 
              md:mt-6 md:text-4xl font-cuarto text-center '>
              Contact me
          </h1>

          <div className='w-full'>

          </div>   

        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col w-full md:w-[50%] h-auto md:h-[400px]  items-center justify-start '>

      

          <form onSubmit={submitForm} className='w-full flex flex-col mt-4'>
            <label htmlFor="email" className='w-full px-4 mt-4 font-secondary text-xl  md:px-8 '>
              email
            </label>
            <input id='email' type="text" className='flex-1 mx-4  py-[2px] font-primary text-lg  bg-font_primary/0
            md:mx-8   input-per container-input'/>

            <label htmlFor="email" className='w-full px-4 mt-4 font-secondary text-xl  md:px-8 '>
              message
            </label>
            <textarea id='email' placeholder='write message' type="text" className='flex-1 mx-4 min-h-[80px] py-[2px] font-primary text-lg pr-3 
            md:mx-8   input-per  container-text-area' />

            <div className='flex justify-center md:justify-start w-full'>
              <button type='submit' className='mt-10 md:mt-6 px-3 py-2 mx-4  bg-red block font-secondary font-semibold rounded-lg hover:brightness-110 button-submit    
              md:mx-8'>
                Submit
              </button>
            </div>
 
          </form>

{/*           FaGithub, FaYoutube, FaLinkedin
 */}
          <div className='flex justify-center md:justify-start w-full gap-x-4 h-[50px]  mt-12 md:px-9 '>
              <a className="cursor-pointer w-10" href="https://www.linkedin.com/in/fray-desarrolador/" >
                <FaLinkedin className='scale-[1.6]'/>
              </a> 

              <a className='cursor-pointer w-10' href="https://github.com/fraynilson2003">
                <FaGithub className='scale-[1.6]'/>
              </a>  

              <a className='cursor-pointer w-10' href="https://github.com/fraynilson2003">
                <FaYoutube className='scale-[1.6]'/>
              </a>          
          </div>

          <p>
            <BiCopyright>
              aa
            </BiCopyright>
          </p>

        </motion.div>

      </div >

    </div>
  )
}

