import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "./styles.css"
import { getAllCategories, getCategorieId, updateCategoryApi } from '../../redux/actionsCategories'
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'

export default function UpdateCategory() {
  let [categoriesState, setCategoriesState] = useState([])

  let userApp01 = useSelector(state=>state.userApp01)
  let [categoryId, setCategoryId] = useState()
  let [form, setForm] = useState({
    id: "",
    name: ""
  })

  let dispatch = useDispatch()

  let getAllCat = ()=>{
    getAllCategories()
    .then(res=>{
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: res.data
      })
      setCategoriesState(res.data)
    }).catch(err=>{
      alert(err.response.status)
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: [] 
      })
      setCategoriesState([])
    })
  }

  //option product
  let changeOption = (event)=>{
    setCategoryId(event.target.value)
  }

  let submitForm = (event)=>{
    event.preventDefault()
    if(userApp01.token){
      dispatch(updateCategoryApi(form, userApp01))
      getAllCat()
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
    if(categoriesState && categoriesState.length){
      let catgSelect = categoriesState.filter(ele=>ele.id === Number(categoryId))
      setForm({
        id: catgSelect[0].id,
        name: catgSelect[0].name
      })
    }
  }, [categoryId])

  useEffect(()=>{
    getAllCategories()
    .then(res=>{
      setCategoriesState([...res.data])
      setCategoryId(res.data[0].id)
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: res.data
      })
    }).catch(err=>{
      alert(err.response.status)
      setCategoriesState([])
      dispatch({
        type:CONSTANTS_APP.GET_ALL_CATEGORIES_APP01, 
        payload: [] 
      })
    })
  }, [])


  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
    <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Update Category</h1>
      <div className='max-h-[350px] scroll-my-0 overflow-hidden overflow-y-scroll scrollFF'>

        <div className='flex flex-row font-tertiary mx-10 justify-between pb-5 mt-3 border-b-2'>
        <label  className='my-1' htmlFor="name">Select category</label>
          <select 
            className='outline-none py-1 px-2 rounded-md text-oscuro '
            onChange={changeOption}
            name="product" 
            id="product"
            value={categoryId? categoryId : 1}>

            {categoriesState && categoriesState.length? (categoriesState.map((pro, ind)=>
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
