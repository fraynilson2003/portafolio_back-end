import React from 'react'
import Aside from './Aside'
import DjangoApp from '../../apps/apis/DjangoPython/DjangoApp'

export default function Hero() {
  return (
    <div className='flex flex-grow flex-row w-full bg-primary'>
      <Aside/>

      <div className='flex-1'>
        <DjangoApp/>
        
      </div>


    </div>
  )
}
