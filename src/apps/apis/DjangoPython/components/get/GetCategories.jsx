import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CONSTANTS_APP } from "../../redux/constants";
import { getAllCategories } from "../../redux/actionsCategories";


export default function GetCategories() {
    let userApp01 = useSelector((state) => state.userApp01);

    let dispatch = useDispatch();
  
    let getCate = ()=>{
        getAllCategories()
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


    return (
      <div className="flex flex-col justify-center min-w-[240px] md:min-w-[318px] max-w-[500px] mx-auto">
          <h1 className="ml-3 mt-3 text-2xl font-secondary text-center">
            Get Categories
          </h1>
    
          <button onClick={getCate} className="p-2 bg-green rounded-md mx-auto mt-20 text-xl w-[80px] brightness-75 hover:brightness-100">
            Get All
          </button>
        </div>
      );
}
