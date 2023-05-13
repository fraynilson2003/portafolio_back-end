import React, { useState } from 'react'
import { login } from '../../redux/actionUser'
import { useDispatch } from 'react-redux'

export default function LoginUser() {
  let [form, setForm] = useState({
    email: "",
    password: ""
  })

  let dispatch = useDispatch()

  let submitForm = (event)=>{
    event.preventDefault()

    dispatch(login(form))

    setForm({
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
      <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Login</h1>
      <div>
        <form onSubmit={submitForm} className='flex flex-col mt-5 font-tertiary text-md mx-10'>
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

            <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>
              Login
            </button>

        </form>
      </div>
    </div>
  )
}
