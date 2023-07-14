import React, { useState } from 'react'
import { useFormik } from "formik"
import { motion } from "framer-motion"
import { fadeIn } from '../../helpers/variantsMotion'
import { TypeAnimation } from 'react-type-animation'
import { FaGithub, FaYoutube, FaLinkedin } from "react-icons/fa"

import ZukoImg from "../../assets/avatarAng/splash-zuko.png"
import { optionLinks } from './optionsLinks' 
import { SchemaContact } from './schemaContact'
import axios from 'axios'

const URL_API = "https://apiemail-production.up.railway.app"

export default function Contact() {
  let initialValues = {
    email: "",
    message: "",
  }

  const {
    values,
    setValues,
    handleBlur,
    handleChange,
    handleSubmit,
    errors,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: SchemaContact(),
    onSubmit: (values, { resetForm }) => {
      submitForm(values)
      resetForm();
    },
  });


  let submitForm = (values)=>{
    sendMessage(values)
  }

  let sendMessage = async (body)=>{
    try {
      let objBody = {...body}
      let response = await axios.post(`${URL_API}/email/`, objBody)
      alert("message sent successfully")
    } catch (error) {
      alert("error sent successfully")
      console.log("+++++++++++++++++++++++++++++++++++++");
      console.log(error);
      console.log("+++++++++++++++++++++++++++++++++++++");

    }
  }

  return (
    <div id={optionLinks.services} className='snap-center flex h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] flex-1 w-full relative md:flex-row max-w-[1400px]'>
      
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
          variants={fadeIn("right", 0.3, 0.4)} 
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
          variants={fadeIn("left", 0.3, 0.4)} 
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
                  name="email" 
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className='w-full  py-[2px] font-primary text-lg
                  input-per  container-input'/>

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
                name='message'
                type="text" 
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className='w-full  min-h-[80px] max-h-[120px] py-[2px] font-primary text-lg pr-3 
                  input-per   container-text-area' />

              {errors.message && touched.message ? (
                <p className="text-bottom_barra text-md text-md font-semibold font-primary">
                  {errors.message}
                </p>
              ) : null}
            </div>

   

            <div className='flex justify-center md:justify-start w-full py-2 px-4 md:px-8'>
              <button  
                type="submit" 
                 className='px-3 py-2  flex justify-center font-secondary font-semibold rounded-lg hover:brightness-110 button-submit'>
                  Submit
              </button>
            </div>
 
          </form>


          <div className='flex justify-center md:justify-start  w-full gap-x-4 h-[30px]  mt-6 md:mt-4 md:px-6'>
              <a className="flex justify-center items-center cursor-pointer w-10 text-center" href="https://www.linkedin.com/in/fray-desarrolador/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className='scale-[1.6]'/>
              </a> 

              <a className='flex justify-center items-center cursor-pointer w-10 text-center' href="https://github.com/fraynilson2003" target="_blank" rel="noopener noreferrer">
                <FaGithub className='scale-[1.6]'/>
              </a>  

              <a className='flex justify-center items-center cursor-pointer w-10 text-center' href="https://github.com/fraynilson2003" target="_blank" rel="noopener noreferrer">
                <FaYoutube className='scale-[1.6]'/>
              </a>          
          </div>

        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={fadeIn("up", 0.2, 0.3)} 
          initial="hidden" 
          whileInView={"show"} 
          viewport={{once: false, amount:0.3}}
          className='absolute bottom-[80px] w-full text-center'>
            Copyright © 2023 FTT
        </motion.p>
        
      </div >

    </div>
  )
}

