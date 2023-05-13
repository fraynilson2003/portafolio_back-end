import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProductApi } from '../../redux/actionProducts'
import "./styles.css"
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'
import { getAllCategories } from '../../redux/actionsCategories'

export default function CreateProduct() {
  let categories = useSelector(state=>state.allCategoriesApp01)
  let userApp01 = useSelector(state=>state.userApp01)

  let dispatch = useDispatch()
  
  let [form, setForm] = useState({
    users: [],
    name: "",
    photo: "ascascasc.jpg",
    description: "",
    price: "",
    category: categories[0].id,
  })

  //option category
  let changeOptionCategory = (event)=>{
    let value = Number(event.target.value)

    setForm({
      ...form,
      category: value
    })
  }



  let submitForm = (event)=>{
    event.preventDefault()
    if(userApp01.token){
      dispatch(createProductApi(form, userApp01))
  
      setForm({
        users: [],
        name: "",
        photo: "ascascasc.jpg",
        description: "",
        price: "",
        category: null,
      })

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
    <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Create Product</h1>
      <div className='max-h-[350px] scroll-my-0 overflow-hidden overflow-y-scroll scrollFF'>
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

          <label  className='mt-2' htmlFor="email">description</label>
          <textarea
            value={form.description} 
            onChange={changeForm}   
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='description' 
            name='description' 
            type="text"/>

          <label  className='mt-2' htmlFor="password">price</label>
          <input
            onSubmit={submitForm}
            value={form.price} 
            onChange={changeForm}   
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='price' 
            name='price' 
            type="number"/>

          <label className='my-1 text-lg font-semibold text-fondo_blanco' htmlFor="category">category</label>
          <select 
            className='outline-none py-2 px-2  text-oscuro rounded-md'
            onChange={changeOptionCategory}
            defaultValue={categories.length? categories[0].id : ""}
            name="category" 
            id="category">

            {categories && categories.length? (categories.map(pro=>
              <option value={pro.id}>
                {pro.name}
              </option>
            )):<></>}
          </select>

          <label  className='mt-2' htmlFor="password">quantity</label>
          <input
            onSubmit={submitForm}
            value={form.quantity} 
            onChange={changeForm}   
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
            id='quantity' 
            name='quantity' 
            type="number"/>


            <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>Create</button>

        </form>
      </div>
    </div>
  )
}
