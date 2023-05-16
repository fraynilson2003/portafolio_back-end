import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'

import AngImg from "../../assets/avatarAng/splash-ang.png"
import KataraImg from "../../assets/avatarAng/splash-katara.png"
import TophImg from "../../assets/avatarAng/splash-toph.png"
import ZukoImg from "../../assets/avatarAng/splash-zuko.png"

export default function AbouteMe() {
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
    };

    // Escucha el evento de cambio de tamaño de la ventana
    window.addEventListener('resize', handleResize);

    // Obtén la altura de la pantalla en el montaje inicial
    setScreenHeight(window.innerHeight);

    // Limpia el evento de cambio de tamaño cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className='flex flex-1 h-[calc(100vh-44px)] flex-col md:flex-row mx-auto   text-font_primary'>
      
      <div className="w-[50%] h-full overflow-hidden bg-amarillo/10">
        <motion.div
          variants={fadeIn("right", 0.5 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className=''  >

          <h1 className='flex justify-center mt-6 text-3xl font-secondary text-center'>welcome to my portfolio</h1>


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

            <p className="mt-4 mx-2 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae magni enim vitae animi, illo amet facere neque ullam eos fugiat officia ex optio distinctio voluptatem consequuntur aliquid suscipit excepturi.</p>    

        </motion.div>
      </div >

      <div className='w-[50%] h-full overflow-hidden'>
        <motion.div
          variants={fadeIn("left", 0.5 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='w-full flex justify-center items-center h-full'  
          >

          <div className="h-[80%] overflow-hidden relative">
            <img className="object-contain h-full rounded-lg" src={AngImg} alt="Ang" />

          </div>


        </motion.div>
      </div>

 
    </div>
  )
}
