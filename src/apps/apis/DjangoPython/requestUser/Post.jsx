import React, { useState } from 'react'
import CreateUser from '../components/post/CreateUser'
import AddProductUser from '../components/post/AddProductUser'
import CreateProduct from '../components/post/CreateProduct'
import LoginUser from '../components/post/LoginUser'
import CreateCategory from '../components/post/CreateCategory'

export default function Post() {
  let [option, setOption] = useState(1)
 

  return (
    <div className='relative flex flex-col justify-center'>
      <div className='flex flex-row flex-1 items-center justify-start h-[24px] bg-top_barra ml-[20px] text-[13px]'>
        <p onClick={()=>setOption(1)} className='px-2 hover:bg-left_barra cursor-pointer'>Login</p>

        <p onClick={()=>setOption(2)} className='px-1 hover:bg-left_barra cursor-pointer'>Register</p>

        <p onClick={()=>setOption(3)} className='px-1 hover:bg-left_barra cursor-pointer'>Add Product</p>

        <p onClick={()=>setOption(4)} className='px-2 hover:bg-left_barra cursor-pointer'>C. Product</p>

        <p onClick={()=>setOption(5)} className='px-2 hover:bg-left_barra cursor-pointer'>C. Category</p>
      </div>
      
      <div className='flex-1 ml-[20px] '>
        {option === 1?(
          <LoginUser/>
        ):<></>}

        {option === 2?(
          <CreateUser/>
        ):<></> }

        {option === 3?(
          <AddProductUser/>
        ):<></>}

        {option === 4?(
          <CreateProduct/>
        ):<></>}
        
        {option === 5?(
          <CreateCategory/>
        ):<></>}
      </div>

    </div>
  )
}
