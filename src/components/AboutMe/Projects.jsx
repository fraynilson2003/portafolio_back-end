import React from 'react'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { TypeAnimation } from 'react-type-animation'

import TophImg from "../../assets/avatarAng/splash-toph.png"
import { optionLinks } from './NavAboutMe'

export default function Projects() {


  return (
    <div id={optionLinks.services} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row'>
      
      <div className="flex-1 flex items-center  mx-6 md:w-[50%] h-full overflow-hidden  z-[115]">
        <motion.div
          variants={fadeIn("right", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col h-full items-center justify-center '>

          <h1 className='flex justify-center mt-2 mb-16 px-4  text-3xl font-secondary text-center'>welcome to my portfolio</h1>


          <TypeAnimation 
            sequence={[
              "Python",
              2000,
              "Django",
              2000,
              "PostgresSQL",
              2000,
              "Django-rest",
              2000
            ]}
            speed={50}
            className="text-accent inline-block ml-2"
            wrapper='div'
            repeat={Infinity}/>

            <p className="mt-4 px-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae magni enim vitae animi, illo amet facere neque ullam eos fugiat officia ex optio distinctio voluptatem consequuntur aliquid suscipit excepturi.</p>    

        </motion.div>
      </div >

      <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:relative absolute'>
        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          exit={{ opacity: 100 }}
          className='w-full flex justify-center items-center h-full'  
          >

          <div className="w-full flex justify-center h-[90%] overflow-hidden relative ">
            <img 
              className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100 filter drop-shadow-2xl
              text-green hover:brightness-110" 
              src={TophImg} 
              alt="Ang" />

          </div>


        </motion.div>
      </div>

    </div>
  )
}

