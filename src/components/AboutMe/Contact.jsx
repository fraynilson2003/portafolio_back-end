import React from 'react'
import { useFormik } from "formik"
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"

import ZukoImg from "../../assets/avatarAng/splash-zuko.png"
import { optionLinks } from './NavAboutMe'
import { BiCopyright } from 'react-icons/bi'
import { SchemaContact } from './schemaContact'

export default function Contact() {

  const {
    values,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
    isValid,
  } = useFormik({
    initialValues: {
      email: "",
      message: "",
    },
    validationSchema: SchemaContact(),
    onSubmit: (values, { resetForm }) => {
      submitForm(values)
      resetForm();
    },
  });


  let submitForm = (values)=>{
    console.log("******************************************");
    console.log("Form enviado");
    console.log(values);
    console.log("******************************************");

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



      <div className="flex-1 relative flex flex-col md:flex-row justify-center items-center  mx-6 w-full h-full overflow-hidden max-w-[1400px] z-[115]">

        <motion.div
          variants={fadeIn("left", 0.4 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='flex flex-col w-full md:w-[50%] h-auto md:h-[420px]
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
          className='flex flex-col w-full md:w-[50%] h-auto md:h-[420px]  items-center justify-start '>

      

          <form onSubmit={handleSubmit} className='w-full flex flex-col mt-4 '>

          <div className='px-4 flex-col w-full z-[500] h-[90px]  mt-4  md:px-8'>
            <label htmlFor="email" className='w-full  font-secondary text-xl'>
                email
              </label>
              <input 
                id='email' 
                type="text" 
                values={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full  py-[2px] font-primary text-lg  bg-font_primary/0
                input-per container-input'/>

              {errors.email && touched.email ? (
                <p className="text-bottom_barra text-md font-semibold font-primary">
                  {errors.email}
                </p>
              ) : null}
          </div>

            <div className='flex px-4 flex-col w-full h-[140px] max-h-[190px] md:px-8 '>
              <label htmlFor="message" className='w-full  font-secondary text-xl'>
                message
              </label>

              <textarea 
                id='message' 
                placeholder='write message' 
                type="text" 
                values={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full  min-h-[80px] max-h-[120px] py-[2px] font-primary text-lg pr-3 
                  input-per  container-text-area' />

              {errors.message && touched.message ? (
                <p className="text-bottom_barra text-md text-md font-semibold font-primary">
                  {errors.message}
                </p>
              ) : null}
            </div>

   

            <div className='flex justify-center md:justify-start w-full py-2 px-4 md:px-8'>
              <button type='submit' className='px-3 py-2  flex justify-center font-secondary font-semibold rounded-lg hover:brightness-110 button-submit    
              '>
                Submit
              </button>
            </div>
 
          </form>


          <div className='flex justify-center md:justify-start w-full gap-x-4 h-[50px]  mt-6 md:mt-4 md:px-9 '>
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

        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={fadeIn("up", 0.2 )} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.2}}
          className='absolute bottom-[80px] w-full text-center'>
            Copyright © 2023 FTT
        </motion.p>
        
      </div >

    </div>
  )
}

