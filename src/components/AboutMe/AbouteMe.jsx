import React, { useEffect, useState } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import ReactDOMServer from 'react-dom/server';

import AngImg from "../../assets/avatarAng/splash-ang.png"
import KataraImg from "../../assets/avatarAng/splash-katara.png"
import TophImg from "../../assets/avatarAng/splash-toph.png"
import ZukoImg from "../../assets/avatarAng/splash-zuko.png"
import NavAboutMe, { optionLinks } from './NavAboutMe'
import { Tooltip } from 'react-tooltip';

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
    <div id='per-scroll' className='flex flex-1 flex-col div-gradient relative items-center h-[calc(100vh-44px)] max-h-[calc(100vh-44px)] overflow-y-auto  mx-auto text-font_primary'>
      {/* backdrop-blur-[1px] */}
      {/* menu */}
      <NavAboutMe/>

      {/* parte 1 */}
      <div id={optionLinks.home} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row'>
    
        <div className="flex-1 flex items-center  mx-6 md:w-[50%] h-full overflow-hidden z-[115] font-primary">
          <motion.div
            variants={fadeIn("right", 0.4 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}
            className='flex flex-col h-full items-center justify-center '>


            <h1 
              data-tooltip-id="my-tooltip"
              data-tooltip-html={ReactDOMServer.renderToStaticMarkup(<div>I am <b>JSX</b> content</div>)}
              className='flex justify-center mt-2 mb-10 px-4 text-3xl md:text-4xl font-cuarto text-center '>
              Backend Developer & Fronted Developer <br />
              Open Source
            </h1>


            <Tooltip id="my-tooltip" />



            <p className='w-full text-green my-1 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
              {"Tecnologies fronted:  "}
            </p>

            <p className='w-full  mb-2 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
              TS & JS & React & Tailwind
            </p>


            <p className='w-full text-green my-1 font-secondary font-semibold text-xl px-4 text-center md:text-start '>
              {"Tecnologies backend:  "}
            </p>

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



              <p className="mt-1 px-4 text-justify text-sm lg:text-base">
                Meet the Cyberpunk Coder: part hacker, part wizard. With a keyboard as a magic wand and lines of code as spells, he dances in binary rhythm and weaves dreams in the language of machines. His code is sharp and his creativity even sharper. In a world where bits and bytes rule, this rebellious programmer never leaves the hand-brewed coffee behind. Embracing the cyberpunk spirit, he sits every day on his own throne from where he watches the world to conquer.           
              </p>    

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

            <div className="w-full flex justify-center h-[90%] overflow-hidden relative ">
              <img className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100 filter hover:drop-shadow-2xl text-green" src={AngImg} alt="Ang" />

            </div>


          </motion.div>
        </div>

      </div>



      {/* parte 2 */}
      <div id={optionLinks.about} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row'>
    
        <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:relative absolute'>
            <motion.div
              variants={fadeIn("right", 0.4 )} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once: false, amount:0.3}}
              className='w-full flex justify-center items-center h-full'  
              >

              <div className="w-full flex justify-center h-[90%] overflow-hidden relative ">
                <img className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100" src={KataraImg} alt="Ang" />
              </div>


            </motion.div>
        </div>

        <div className="flex-1 flex items-center  mx-6 md:w-[50%] h-full overflow-hidden  z-[115]">
          <motion.div
            variants={fadeIn("left", 0.4 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}
            className='flex flex-col h-full items-center justify-center '>

            <h1 className='flex justify-center mt-2 mb-16 px-4 md:pr-10 md:pl-2 text-3xl font-secondary text-center'>welcome to my portfolio</h1>


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

              <p className="mt-4 px-4 md:pr-10 md:pl-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae magni enim vitae animi, illo amet facere neque ullam eos fugiat officia ex optio distinctio voluptatem consequuntur aliquid suscipit excepturi.</p>    

          </motion.div>
        </div >

      </div>


      {/* parte 3 */}
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
              <img className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100" src={TophImg} alt="Ang" />

            </div>


          </motion.div>
        </div>

      </div>


      {/* parte 4 */}
      <div id={optionLinks.work} className='flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 relative md:flex-row'>
    
        <div className='flex-1 px-3 w-full md:w-[50%] h-full overflow-hidden md:relative absolute'>
            <motion.div
              variants={fadeIn("right", 0.4 )} 
              initial="hidden" 
              whileInView={"show"} 
              viewport={{once: false, amount:0.3}}
              className='w-full flex justify-center items-center h-full'  
              >

              <div className="w-full flex justify-center h-[90%] overflow-hidden relative ">
                <img className="object-contain h-full rounded-lg brightness-[0.2] md:brightness-100" src={ZukoImg} alt="Ang" />
              </div>


            </motion.div>
        </div>

        <div className="flex-1 flex items-center  mx-6 md:w-[50%] h-full overflow-hidden  z-[115]">
          <motion.div
            variants={fadeIn("left", 0.4 )} 
            initial="hidden" 
            whileInView={"show"} 
            viewport={{once: false, amount:0.3}}
            className='flex flex-col h-full items-center justify-center '>

            <h1 className='flex justify-center mt-2 mb-16 px-4 md:pr-10 md:pl-2 text-3xl font-secondary text-center'>welcome to my portfolio</h1>


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

              <p className="mt-4 px-4 md:pr-10 md:pl-2 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae magni enim vitae animi, illo amet facere neque ullam eos fugiat officia ex optio distinctio voluptatem consequuntur aliquid suscipit excepturi.</p>    

          </motion.div>
        </div >

      </div>


    </div>
  )
}
