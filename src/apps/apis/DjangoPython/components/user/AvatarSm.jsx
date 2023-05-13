import React, { useEffect, useRef, useState } from 'react'
import avatar from "../../../../../assets/Missing_avatar.svg"
import { useDispatch, useSelector } from 'react-redux'
import { typeOptions } from '../../requestUser/Entities';
import { CONSTANTS_APP } from '../../redux/constants';

export default function AvatarSm() {
  let userApp01 = useSelector(state=>state.userApp01)
  const refAvatar = useRef(null);
  const refOption = useRef(null);


  let dispatch = useDispatch()
  let [active, setActive] = useState(false)

  let logoutSession = ()=>{
    localStorage.removeItem('userStorage')
    localStorage.removeItem('loginTime')
    window.location.reload()
  }
  
  let redirectLogin = ()=>{
    setActive(false)
    dispatch({
      type: CONSTANTS_APP.ENITIES_APP_01,
      payload: typeOptions.POST 
    })
  }

  useEffect(() => {
    // Agrega un manejador de eventos en la carga de la página
    document.addEventListener('mousedown', handleClickOutside);

    // Limpia el manejador de eventos cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  const handleClickOutside = (event) => {
    // Comprueba si el clic se realizó dentro o fuera del componente
    if (refAvatar.current && !refAvatar.current.contains(event.target) && refOption.current && !refOption.current.contains(event.target)) {
      setActive(false)
    }
  };

  return (
    <>
      <div className='flex flex-row  bg-trans z-[150] items-center'>
          <img 
            ref={refAvatar}
            onClick={()=>setActive(!active)}
            className='w-[40px] bg-trans rounded-full cursor-pointer' src={avatar} alt="avatar" />
          <p className='font-primary ml-2 text-sm text-font_primary'>{userApp01.username? userApp01.username : "None"}</p>

      </div>

      <div ref={refOption} className={active? 'block z-[150] absolute bg-font_primary w-[120px] text-oscuro top-[45px] left-0  md:top-[75px] md:right-0 rounded-md px-1' : "hidden"}>
          {userApp01.username? (
            <div 
            onClick={logoutSession}
              className="w-full cursor-pointer py-1 my-1 px-2 tracking-1.5 rounded-md hover:bg-font_trans hover:text-font_primary">
                Logout
            
            </div>
          ):(
            <div 
              onClick={redirectLogin}
              className="w-full cursor-pointer py-1 my-1 px-2 tracking-1.5 rounded-md hover:bg-font_trans hover:text-font_primary">
                Login
            </div>
          )}
      </div>

    </>


  )
}
