import axios from "axios";
import { CONSTANTS_APP } from "./constants";


const baseUrlApp01 = "https://apipythondjango-production.up.railway.app"


/* **************************************************************************** */

export let createCategory = (dataLogin, category)=>async(dispatch)=>{
  let startTime = performance.now()
  try {
    let perimission = {
        "Authorization": dataLogin.token,
        'X-CSRFToken': dataLogin["X-CSRFToken"]
    }

    let result = await axios.post(`${baseUrlApp01}/api/category/`, category, {
      headers: perimission
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

export let getAllCategories = async(dataLogin)=>{
  let startTime = performance.now()
  try {
    let response = await axios.get(`${baseUrlApp01}/api/category`)
    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    response.elapsedTime = elapsedTime.toFixed(0)

    console.log("bien");
    return response

  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)

    return error.response
  }
}

export let getCategorieId = async(idCategory)=>{
  let startTime = performance.now()
  try {
    let response = await axios.get(`${baseUrlApp01}/api/category/${idCategory}/`)

    let endTime = performance.now()
    const elapsedTime = endTime - startTime

    response.elapsedTime = elapsedTime.toFixed(0)

    return response.data

  } catch (error) {
    let endTime = performance.now()
    const elapsedTime = endTime - startTime
    error.response.elapsedTime = elapsedTime.toFixed(0)

    console.log("/////////////////////////////////////");
    console.log(error);
    return error.response
  }
}


export let updateCategoryApi = (category, dataLogin)=>async(dispatch)=>{
  console.log("recibe");
  console.log(category);
  let startTime = performance.now()
  try {
    let updateCategory = JSON.stringify({
      name: category.name
    })

    let result = await axios.put(`${baseUrlApp01}/api/category/${category.id}/`, updateCategory, {
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


/********* DELETE CATEGORY  ********* */
export let deleteCateforyApi = async(category, dataLogin)=>{
  let startTime = performance.now()
  try {


    let result = await axios.delete(`${baseUrlApp01}/api/category/${category.id}/`, {
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




