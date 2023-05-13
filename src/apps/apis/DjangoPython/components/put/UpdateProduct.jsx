import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createProductApi, getAllProducts, getProductIdSync, updateProductApi } from '../../redux/actionProducts'
import "./styles.css"
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'

export default function UpdateProduct() {
  let categories = useSelector(state=>state.allCategoriesApp01)
  let userApp01 = useSelector(state=>state.userApp01)
  let [products, setProduct] = useState([])
  let [idProduct, setProductId] = useState(1)

  let [form, setForm] = useState({})

  let dispatch = useDispatch()
  
  //actGetPro
  let getPro = ()=>{
    getAllProducts()
    .then(res=>{
      setProduct(res.data)
      setProductId(res.data[0].id)
    }).catch(err=>{
      setProduct([])
    })
  }

  //option category
  let changeOptionCategory = (event)=>{
    let value = Number(event.target.value)

    setForm({
      ...form,
      category: value
    })
  }

  //option product
  let changeOption = (event)=>{
    setProductId(event.target.value)
  }

  let submitForm = (event)=>{
    event.preventDefault()
    if(userApp01.token){
      dispatch(updateProductApi(form, userApp01))
      getPro()
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

  useEffect(()=>{
    getPro()
  }, [])


  useEffect(()=>{
    if(products && products.length){
      let res = products.filter(ele=>ele.id === Number(idProduct))[0]
      setForm({
        id: res.id,
        users: res.users,
        name: res.name,
        photo: res.photo,
        description: res.description,
        price: res.price,
        category: res.category,
      })
      
    }

  }, [idProduct])

  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
    <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Update Product</h1>
      <div className='max-h-[350px] scroll-my-0 overflow-hidden overflow-y-scroll scrollFF'>

        <div className='flex flex-row font-tertiary mx-10 justify-between pb-5 mt-3 border-b-2'>
        <label  className='my-1' htmlFor="name">Select product</label>
          <select 
            className='outline-none py-1 px-2 rounded-md text-oscuro '
            onChange={changeOption}
            name="product" 
            id="product"
            value={idProduct? idProduct : 1}>
            {products && products.length? (products.map((pro, ind)=>
              <option key={ind} value={pro.id}>
                {pro.name}
              </option>
            )):<></>}
          </select>
        </div>


        {form?.id? 
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
            defaultValue={form.category}
            name="category" 
            id="category">

            {categories && categories.length? (categories.map(pro=>
              <option value={pro.id}>
                {pro.name}
              </option>
            )):<></>}
          </select>

            <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>
              Update
            </button>

        </form>
        :<></>
        }

      </div>
    </div>
  )
}
