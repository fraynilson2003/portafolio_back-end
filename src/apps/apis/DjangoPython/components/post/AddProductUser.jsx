import React, { useEffect, useState } from 'react'
import { addProduct, getAllProducts } from '../../redux/actionProducts'
import { useDispatch, useSelector } from 'react-redux'
import { CONSTANTS_APP } from '../../redux/constants'
import { typeOptions } from '../../requestUser/Entities'

export default function AddProductUser() {
  let [products, setProduct] = useState([])
  let [idProduct, setProductId] = useState()

  let userApp01 = useSelector(state=>state.userApp01)

  let dispatch = useDispatch()



  let setAddVideogame = (event)=>{
    event.preventDefault()
    if(userApp01.id){
      dispatch(addProduct(idProduct, userApp01))
      setProductId(products && products.length? products[0].id : 1)
    }else{
      dispatch({
        type: CONSTANTS_APP.ENITIES_APP_01,
        payload: typeOptions.POST 
      })
      alert("Login please")
    }
  }

  let changeOption = (event)=>{
    setProductId(event.target.value)
  }

  useEffect(()=>{
    getAllProducts()
    .then(res=>{
      setProduct(res.data)
    }).catch(err=>{
      setProduct([])
    })
  }, [])

  useEffect(()=>{
    setProductId(products && products.length? products[0].id : 1)
  }, [products])


  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
    <h1 className='ml-3 mt-3 text-2xl font-secondary text-center'>Add Product</h1>
      <div>
        <form onSubmit={setAddVideogame}  className='flex flex-col mt-5 font-tertiary text-md mx-10 text-oscuro'>
          <label  className='my-1 text-lg font-semibold text-fondo_blanco' htmlFor="product">Select Product</label>
          <select 
            className='outline-none py-2 px-2 rounded-md'
            onChange={changeOption}
            name="product" 
            id="product"
            defaultValue={products && products.length? products[0].id : 1}>
            {products && products.length? (products.map((pro, ind)=>
              <option key={ind} value={pro.id}>
                {pro.name}
              </option>
            )):<></>}

          </select>

            <button 
            className='p-2 bg-green rounded-md mx-auto mt-4 text-xl w-[80px] brightness-75 hover:brightness-100' type='submit'>
              Add
            </button>

        </form>
      </div>
    </div>
  )
}
