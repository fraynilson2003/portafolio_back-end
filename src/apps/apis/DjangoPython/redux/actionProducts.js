import axios from "axios";
import { CONSTANTS_APP } from "./constants";


const baseUrlApp01 = "https://apipythondjango-production.up.railway.app"


/* **************************************************************************** */



export let getAllProducts = async(query = {name: ""})=>{
  let startTime = performance.now()
  try {
    let response = await axios.get(`${baseUrlApp01}/api/product`, {
      params: query
    })
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    response.elapsedTime = elapsedTime.toFixed(0)

    console.log("bien");
    return response

  } catch (error) {
    console.log("mal");
    console.log(error.response?.data);

    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)

    return error.response
  }
}

export let  getProductId = (id) => async(dispatch)=>{
  let startTime = performance.now()
  try {
    let result = await axios.get(`${baseUrlApp01}/api/product/${id}`)
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    result.elapsedTime = elapsedTime.toFixed(0)

    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: result
    })

  } catch (error) {
    console.log("ERROR");
    console.log(error);

    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)

    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: error.response
    })
  }
}

export let createProductApi = (product, dataLogin)=>async(dispatch)=>{
  let startTime = performance.now()
  try {
    let newProduct = JSON.stringify(product)

    let result = await axios.post(`${baseUrlApp01}/api/product/`, newProduct, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': dataLogin.token
      }
    })
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    result.elapsedTime = elapsedTime.toFixed(0)

  
    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: result
    })

  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)
    
    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: error.response
    })
  }
}

export let addProduct = (idProduct, dataLogin) => async(dispatch)=>{
  let startTime = performance.now()
  try {
    let headers = {
        "Authorization": dataLogin.token,
        'X-CSRFToken': dataLogin["X-CSRFToken"]
    }
    let response = await axios.post(`${baseUrlApp01}/api/user/admin_product/${idProduct}`, {
      userId: Number(dataLogin.id)
    }, 
    {headers: headers})

    let endTime = performance.now()

    const elapsedTime = endTime - startTime

    response.elapsedTime = elapsedTime.toFixed(0)

    console.log("Salio Bien Add");
    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: response
    })

  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)

    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: error.response
    })
  }
}


/***********  UPDATE   ************** */
export let updateProductApi = (product, dataLogin)=>async(dispatch)=>{
  let startTime = performance.now()
  try {
    let updateProduct = JSON.stringify(product)

    let result = await axios.put(`${baseUrlApp01}/api/product/${product.id}/`, updateProduct, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': dataLogin.token
      }
    })
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    result.elapsedTime = elapsedTime.toFixed(0)

  
    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: result
    })

  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)
    
    console.log("*******************************************");
    console.log(error);

    return dispatch({
      type:CONSTANTS_APP.RESULT_APP_01, 
      payload: error.response
    })
  }
}


export let  getProductIdSync = async(id)=>{
  try {
    let result = await axios.get(`${baseUrlApp01}/api/product/${id}/`)

    return result.data

  } catch (error) {
    console.log("----------------------------");
    console.log(error);
    throw new Error("Error detail product")
  }
}


/************** DELETE  ************* */
export let deleteProductApi = async(product, dataLogin)=>{
  let startTime = performance.now()
  try {


    let result = await axios.delete(`${baseUrlApp01}/api/product/${product.id}/`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': dataLogin.token
      }
    })
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    result.elapsedTime = elapsedTime.toFixed(0)
    result.data = {
      message: "successfully deleted"
    }
  
    return result
  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)
    
    console.log("*******************************************");
    console.log(error);

    return error.response
  }
}