import React, { useState } from 'react'
import RequestBar from '../RequestBar'
import Post from './Post'
import Get from './Get'
import Put from './Put'
import Delete from './Delete'
import { useSelector } from 'react-redux'

export const typeOptions = {
  POST: "POST",
  GET: "GET",
  PUT: "PUT",
  DELETE: "DELETE"
}

export default function Entities() {
  let selectEnities = useSelector(state=>state.selectEnities)

  return (
    <div className='w-full max-w-full md:flex-1 h-full relative'>

      {selectEnities === typeOptions.POST?(
        <Post/>
        ):<></>}

      {selectEnities === typeOptions.GET?(
        <Get/>
        ):<></>}
        
      {selectEnities === typeOptions.PUT?(
        <Put/>
        ):<></>}
             
      {selectEnities === typeOptions.DELETE?(
        <Delete/>
      ):<></>}
 

      <RequestBar/>


    </div>
  )
}
