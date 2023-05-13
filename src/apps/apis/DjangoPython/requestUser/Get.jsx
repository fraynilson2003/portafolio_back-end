import React, { useState } from 'react'
import GetProducts from '../components/get/GetProducts'
import GetCategories from '../components/get/GetCategories'
import GetUser from '../components/get/GetUser'
import GetMyProducts from '../components/get/GetMyProducts'

export default function Get() {
  let [option, setOption] = useState(1)
 

  return (
    <div className='relative flex flex-col justify-center'>

      <div className='flex flex-row flex-1 items-center justify-start h-[24px] bg-top_barra ml-[20px] text-[13px]'>
        
        <p onClick={()=>setOption(1)} className='px-2 hover:bg-left_barra cursor-pointer'>All Products</p>
        <p onClick={()=>setOption(2)} className='px-2 hover:bg-left_barra cursor-pointer'>All Categories</p>
        <p onClick={()=>setOption(3)} className='px-2 hover:bg-left_barra cursor-pointer'>Users</p>
        <p onClick={()=>setOption(4)} className='px-2 hover:bg-left_barra cursor-pointer'>My Products</p>

      </div>
      
      <div className='flex-1 ml-[20px] '>
        {option === 1?(
          <GetProducts/>
        ):<></> }
        
        {option === 2?(
          <GetCategories/>
        ):<></> }
        
        {option === 3?(
          <GetUser/>
        ):<></> }

        {option === 4?(
          <GetMyProducts/>
        ):<></> }

      </div>

    </div>
  )
}
