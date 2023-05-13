import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductId } from "../../redux/actionProducts";
import { CONSTANTS_APP } from "../../redux/constants";

export default function GetProducts() {
  let userApp01 = useSelector((state) => state.userApp01);
  let dispatch = useDispatch();

  let [formQuery, setFormQuery] = useState({
    name: ""
  })

  let [formId, setFormId] = useState("")

  
  let changeForm = (event =>{
    let value = event.target.value
    let property = event.target.name

    setFormQuery({
      ...formQuery,
      [property]: value
    })
  })

  let getProducts = (event)=>{
    event.preventDefault()


    getAllProducts(formQuery)
    .then((res) => {
      dispatch({
        type:CONSTANTS_APP.RESULT_APP_01, 
        payload: res
      });
    })
    .catch((err) => {
      dispatch({
        type:CONSTANTS_APP.RESULT_APP_01, 
        payload: err
      });
    });
  }


  let changeInputId = (event)=>{
    let value = String(event.target.value)

    if(value!=""){
      if (isNaN(value) || !Number.isInteger(parseInt(value))){
        return false
      }
    }

    setFormId(value)
  }

  let getProId = (event)=>{
    event.preventDefault()

    if(!(Number.isInteger(Number(formId)))){
      alert("Please enter a whole number")
      return false
    }

    dispatch(getProductId(Number(formId)))
  }


  return (
    <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
    <h1 className="ml-3 mt-3 text-2xl font-secondary text-center">
        Get Products
      </h1>
    
      <form className='flex flex-col mt-4 font-tertiary text-md w-[200px] justify-center mx-auto' onSubmit={getProducts} action="">
        <label  className='mt-2 text-center mb-1' htmlFor="username">name</label>
        <input
          value={formQuery.name} 
          onChange={changeForm}   
          className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
          id='name' 
          name='name' 
          type="text"/>

        <button type='submit' className="p-2 bg-green rounded-md mx-auto mt-2 text-lg w-[110px] brightness-75 hover:brightness-100">
          Get name
        </button>
      </form>

      <form onSubmit={getProId} className='flex flex-col mt-4 font-tertiary text-md w-[200px] justify-center mx-auto' >
        <label  className='mt-2 text-center mb-1' htmlFor="id">Id</label>
        <input
          className=' border-none px-3 py-1 text-oscuro outline-none rounded-md mb-2 '
          value={formId}
          onChange={changeInputId}
          id='id'
          name='id' 
          type="text"/>

        <button type='submit' className="p-2 bg-green rounded-md mx-auto mt-2 text-lg w-[110px] brightness-75 hover:brightness-100">
          Get id
        </button>
      </form>


    </div>
  );
}
