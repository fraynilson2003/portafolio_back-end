import React from 'react'
import { typeOptions } from './requestUser/Entities'
import { useDispatch, useSelector } from 'react-redux'
import { CONSTANTS_APP } from './redux/constants'



export default function RequestBar() {
  let selectEnities = useSelector(state=>state.selectEnities)
  let dispatch = useDispatch()

  let changeEnitieSelect = (option)=>{
    dispatch({
      type: CONSTANTS_APP.ENITIES_APP_01,
      payload: option 
    })
  }
  

  let active = "flex justify-center items-center h-[25%] bg-font_trans brightness-100 text-left cursor-pointer hover:brightness-100"
  let notActive = "flex justify-center items-center h-[25%] bg-font_trans brightness-75 text-left cursor-pointer hover:brightness-100"
  return (
    <div className='absolute flex flex-col h-full min-h-full w-[20px] top-0 max-w-[20px] select-none'>
      <div 
        onClick={()=>changeEnitieSelect(typeOptions.GET)}
        className={selectEnities==typeOptions.GET? active:notActive}>
        <p className='transform rotate-90'>{typeOptions.GET}</p>
      </div>

      <div 
        onClick={()=>changeEnitieSelect(typeOptions.POST)}
        className={selectEnities==typeOptions.POST? active:notActive}>
        <p className='transform rotate-90'>{typeOptions.POST}</p>
      </div>

      <div 
        onClick={()=>changeEnitieSelect(typeOptions.PUT)}
        className={selectEnities==typeOptions.PUT? active:notActive}>

        <p className='transform rotate-90'>{typeOptions.PUT}</p>
      </div>

      <div 
        onClick={()=>changeEnitieSelect(typeOptions.DELETE)}
        className={selectEnities==typeOptions.DELETE? active:notActive}>

        <p className='transform rotate-90'>{typeOptions.DELETE}</p>
      </div>

    </div>
  )
}
