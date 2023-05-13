import React, { useState } from 'react'
import DeleteCategory from '../components/delete/DeleteCategory'
import DeleteProduct from '../components/delete/DeleteProduct'


export default function Delete() {
  let [option, setOption] = useState(1)
 

  return (
    <div className='relative flex flex-col justify-center'>

      <div className='flex flex-row flex-1 items-center justify-start h-[24px] bg-top_barra ml-[20px] text-[13px]'>
        
        <p onClick={()=>setOption(1)} className='px-2 hover:bg-left_barra cursor-pointer'>Category</p>
        <p onClick={()=>setOption(2)} className='px-2 hover:bg-left_barra cursor-pointer'>Product</p>


      </div>
      
      <div className='flex-1 ml-[20px] '>
        {option === 1?(
          <DeleteCategory/>
        ):<></> }
 
        {option === 2?(
          <DeleteProduct/>
        ):<></> }
      </div>

    </div>
  )
}
