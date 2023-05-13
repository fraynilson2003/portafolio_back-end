import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getMyProductsApi } from '../../redux/actionUser';
import { CONSTANTS_APP } from '../../redux/constants';
import { typeOptions } from '../../requestUser/Entities';

export default function GetMyProducts() {
    let userApp01 = useSelector((state) => state.userApp01);

    let dispatch = useDispatch();
  
    let getMyPRoducts = ()=>{
      if(userApp01.id){
        dispatch(getMyProductsApi(userApp01))
      }else{
        dispatch({
          type: CONSTANTS_APP.ENITIES_APP_01,
          payload: typeOptions.POST 
        })
        alert("Login please")
      }

    }


    return (
      <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
          <h1 className="ml-3 mt-3 text-2xl font-secondary text-center">
            Get My Products
          </h1>
    
          <button onClick={getMyPRoducts} className="p-2 bg-green rounded-md mx-auto mt-20 text-xl w-[80px] brightness-75 hover:brightness-100">
            Get All
          </button>
        </div>
      );
}

