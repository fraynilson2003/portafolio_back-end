import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCateforyApi, getAllCategories, getCategorieId } from '../../redux/actionsCategories'
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'

export default function DeleteCategory() {
  let categories = useSelector(state=>state.allCategoriesApp01)

  let [categoriesState, setCategoriesState] = useState(categories)

  let userApp01 = useSelector(state=>state.userApp01)
  let [categoryId, setCategoryId] = useState(categories && categories.length? categories[0].id : 1)

  let [form, setForm] = useState({
    id: "",
    name: ""
  })

  let dispatch = useDispatch()

  let getCatg = ()=>{
    getAllCategories()
    .then(res=>{
      setCategoriesState(res.data)
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
  }

  //submit
  let submitForm = (event)=>{
    event.preventDefault()
    if(userApp01.token){
      deleteCateforyApi(form, userApp01)
      .then(res=>{
        dispatch({
          type:CONSTANTS_APP.RESULT_APP_01, 
          payload: res
        })
        getCatg()
        
      }).catch(err=>{
        dispatch({
          type:CONSTANTS_APP.RESULT_APP_01, 
          payload: err
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




  //option product
  let changeOption = (event)=>{
    setCategoryId(event.target.value)
  }

  useEffect(()=>{
    getCategorieId(categoryId)
    .then(res=>{
      setForm({
        id: res.id,
        name: res.name
      })
    }).catch(err=>{
      alert("Error detail category")
    })
  }, [])

  useEffect(()=>{
    let catgSelect = categoriesState.filter(ele=>ele.id === Number(categoryId))
    setForm({
      id: catgSelect[0].id,
      name: catgSelect[0].name
    })
  }, [categoryId])


  useEffect(()=>{
    if(categories && categories.length){
      let antForm = [...categories]
      setCategoriesState(antForm)
      setCategoryId(antForm[0].id? antForm[0].id : 1)
    }


    
    

  }, [categories])


  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
      <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Delete Category</h1>
      <div className='max-h-[350px] scroll-my-0 overflow-hidden overflow-y-scroll scrollFF'>

        <div className='flex flex-row font-tertiary mx-10 justify-between pb-5 mt-3 border-b-2'>
        <label  className='my-1' htmlFor="name">Select category</label>
          <select 
            className='outline-none py-1 px-2 rounded-md text-oscuro '
            onChange={changeOption}
            name="product" 
            id="product"
            value={categoryId? categoryId : 1}>

          {categoriesState && categoriesState.length? (
            categoriesState.map((pro, ind)=>
              <option key={ind} value={pro.id}>
                {pro.name}
              </option>
            )
          ):<></>}


          </select>
        </div>


        {form?.id? 
          <form onSubmit={submitForm} className='flex flex-col mt-5 font-tertiary text-md mx-10'>
          <label  className='my-1' htmlFor="name">name</label>
          <input
            value={form.name} 
            className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2'
            id='name' 
            name='name' 
            type="text"
            />

            <button className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>
              Delete
            </button>
 
          </form>
        :<></>
        }

      </div>
    </div>
  )
}
