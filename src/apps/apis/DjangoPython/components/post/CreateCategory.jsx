import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createCategory, getAllCategories } from '../../redux/actionsCategories'
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'

export default function CreateCategory() {
  let userApp01 = useSelector(state=>state.userApp01)
  let dispatch = useDispatch()

  
    let [form, setForm] = useState({
      name: ""
    })

    let actCat = ()=>{
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
    }
  
    let submitForm = (event)=>{
      event.preventDefault()

      if(userApp01.token){
        dispatch(createCategory(userApp01, form))

        actCat()
  
        setForm({
          name: "",
        })
      }else{
        dispatch({
          type: CONSTANTS_APP.ENITIES_APP_01,
          payload: typeOptions.POST 
        })
        alert("Login please")
      }
  

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
        <h1 className='mt-3 text-2xl font-secondary text-center'>Create category</h1>
        <div>
          <form onSubmit={submitForm} className='flex flex-col mt-5 font-tertiary text-md mx-10'>
            <label  className='my-1' htmlFor="name">name</label>
            <input
              value={form.name} 
              onChange={changeForm}             
              className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
              id='name' 
              name='name' 
              type="text"
              />
  
              <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>
                Create
              </button>
  
          </form>
        </div>
      </div>
    )
}
