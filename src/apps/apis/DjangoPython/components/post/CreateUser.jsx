import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createUserApi } from '../../redux/actionUser'

export default function CreateUser() {
  let dispatch = useDispatch()

  
  let [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  })

  let submitForm = (event)=>{
    event.preventDefault()

    dispatch(createUserApi(form))

    setForm({
      username: "",
      email: "",
      password: ""
    })
  }

  let changeForm = (event)=>{
    let value = event.target.value
    let property = event.target.name

    setForm({
      ...form,
      [property]: value
    })
  }

  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
      <h1 className='mt-3 text-2xl font-secondary text-center'>Create user</h1>
      <div>
        <form onSubmit={submitForm} className='flex flex-col mt-5 font-tertiary text-md mx-10'>
          <label  className='my-1' htmlFor="username">username</label>
          <input
            value={form.username} 
            onChange={changeForm}             
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='username' 
            name='username' 
            type="text"
            />

          <label  className='mt-2' htmlFor="email">email</label>
          <input
            value={form.email} 
            onChange={changeForm}   
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='email' 
            name='email' 
            type="email"/>

          <label  className='mt-2' htmlFor="password">password</label>
          <input
            onSubmit={submitForm}
            value={form.password} 
            onChange={changeForm}   
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='password' 
            name='password' 
            type="password"/>

            <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>Create</button>

        </form>
      </div>
    </div>
  )
}
