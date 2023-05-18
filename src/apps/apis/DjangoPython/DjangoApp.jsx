import React, { useEffect, useState } from 'react'
import { TypeAnimation } from "react-type-animation"
import Entities from './requestUser/Entities'
import { useDispatch, useSelector } from 'react-redux'
import { login } from './redux/actionUser'
import GetResponse from './requestUser/GetResponse'
import { getAllCategories } from './redux/actionsCategories'
import { CONSTANTS_APP } from './redux/constants'
import Avatar from './components/user/Avatar'
import AvatarSm from './components/user/AvatarSm'

export default function DjangoApp() {
  let dispatch = useDispatch()
  let userApp01 = useSelector(state=>state.userApp01)

  useEffect(()=>{
    const localSto = window.localStorage.getItem("userStorage");
    const loginTime  = window.localStorage.getItem("loginTime");

    let loginUserBoolean = false
    if(localSto && loginTime){
      let currentTime = new Date().getTime();

      let timeLimit = 2 * 60 * 60 * 1000;
      let elapsedTime = currentTime - loginTime;

      //verificamos las 2 horas para eliminar el localstorage
      if (elapsedTime > timeLimit) {
        localStorage.removeItem('userStorage');
        localStorage.removeItem('loginTime');
        loginUserBoolean = false
      }else{
        loginUserBoolean = true
        let userLocal = JSON.parse(localSto)
        let response = {
          elapsedTime: "0",
          status: 200,
          data: userLocal
        }
        dispatch({
          type:CONSTANTS_APP.LOGIN_APP_01, 
          payload: response
        })
      }
    }


    // if(!loginUserBoolean){
    //   dispatch(login({
    //     email: "fray@gmail.com",
    //     password: "123456nana"
    //   }))
    // }


    getAllCategories()
    .then(res=>{
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: res.data
      })
    }).catch(err=>{
      alert(err.response.status)
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: [] 
      })
    })
    


  }, [])

  return (

    <div className='flex flex-1 flex-col mx-auto h-[calc(100vh-44px)] min-h-[calc(100vh-44px)] max-h-[calc(100vh-44px)] overflow-y-auto   text-font_primary'>
      <div className='flex relative mr-0 md:mt-4 justify-start mt-2 ml-2 md:hidden'>
        <AvatarSm/>
      </div>

      <div className='flex flex-col md:flex-row w-full relative justify-center md:justify-between'>
        <div>
          <h1 className='text-4xl text-center  font-secondary mx-auto mt-2 md:mt-8 text-accent   md:ml-20 md:text-left'>Api made with Python-Django</h1>
          <span className='flex flex-row justify-center  text-center font-tertiary text-lg   md:ml-20 md:justify-start'>
            <p className="inline-block">Technologies used</p>
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
              repeat={Infinity}
            />
          </span>
        </div>

        <div className='hidden md:flex relative mr-0 md:mt-4 justify-center   md:items-center md:mr-20 md:justify-end'>
          <Avatar/>
        </div>


      </div>


      <div className='flex-1 max-w-full flex flex-wrap mx-0 flex-col md:flex-row  justify-evenly mb-10'>

        <div className='w-full mt-4 mx-auto  h-[460px] bg-left_barra  
        md:max-w-[650px] md:flex-1 md:mt-4 md:mx-5 xl:mx-16 '>
          <Entities/>
        </div>

        <div className={`flex-1 mx-auto mt-4 h-[435px]  rounded-sm mb-8
          md:mx-5 md:mb-0`}>
          <div className='h-[435px] rounded-sm xl:mx-16'>
           <GetResponse/>
          </div>
        </div>

      </div>
    </div>

  )
}
