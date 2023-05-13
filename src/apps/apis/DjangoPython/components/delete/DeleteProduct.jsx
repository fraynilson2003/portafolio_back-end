import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCateforyApi, getAllCategories, getCategorieId } from '../../redux/actionsCategories'
import { deleteProductApi, getAllProducts } from '../../redux/actionProducts'
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'



export default function DeleteProduct() {
  let userApp01 = useSelector(state=>state.userApp01)
  let [productState, setProductState] = useState([])
  let [productId, setProductId] = useState(productState && productState.length? productState[0].id : 1)
  let dispatch = useDispatch()

  let [form, setForm] = useState({
    id: "",
    name: ""
  })

  //getAllproducts
  let resetGetProducts = ()=>{
    getAllProducts()
    .then(res=>{
      setProductState(res.data)
    }).catch(err=>{
      setProductState([])
    })
  }

  //submit
  let submitForm = (event)=>{
    event.preventDefault()
    if(userApp01.token){
      deleteProductApi(form, userApp01)
      .then(res=>{
        dispatch({
          type:CONSTANTS_APP.RESULT_APP_01, 
          payload: res
        })
        resetGetProducts()
  
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
    setProductId(event.target.value)
  }




  useEffect(()=>{
    if(productState && productState.length){
      let proSelect = productState.filter(ele=>ele.id === Number(productId))
      setForm({
        id: proSelect[0].id,
        name: proSelect[0].name
      })
    }
  }, [productId])

  useEffect(()=>{
    resetGetProducts()
  }, [])

  useEffect(()=>{
    if(productState && productState.length){
      setProductId(productState[0].id)
    }
  }, [productState])


  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
      <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Delete Product</h1>
      <div className='max-h-[350px] scroll-my-0 overflow-hidden overflow-y-scroll scrollFF'>

        <div className='flex flex-row font-tertiary mx-10 justify-between pb-5 mt-3 border-b-2'>
        <label  className='my-1' htmlFor="name">Select product</label>
          <select 
            className='outline-none py-1 px-2 rounded-md text-oscuro '
            onChange={changeOption}
            name="product" 
            id="product"
            value={productId? productId : 1}>

            {productState && productState.length? (productState.map((pro, ind)=>
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
