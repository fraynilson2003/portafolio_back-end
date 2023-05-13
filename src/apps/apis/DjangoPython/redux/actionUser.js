import axios from "axios";
import { CONSTANTS_APP } from "./constants";


const baseUrlApp01 = "https://apipythondjango-production.up.railway.app"


export let login = (data)=>async(dispatch)=>{
  let startTime = performance.now()
    try {
      let response = await axios.post(`${baseUrlApp01}/api/user/login`, data)
      let endTime = performance.now()    
      const elapsedTime = endTime - startTime
  
      response.elapsedTime = elapsedTime.toFixed(0)

      console.log("Login Correcto");

      // Elimina el dato con la clave "userStorage" del Local Storage
      localStorage.removeItem("userStorage");
      window.localStorage.setItem("userStorage", JSON.stringify(response.data));

      //login time
      localStorage.removeItem("loginTime");
      localStorage.setItem('loginTime', new Date().getTime());


      return dispatch({
        type:CONSTANTS_APP.LOGIN_APP_01, 
        payload: response
      })
  
    } catch (error) {
      let endTime = performance.now()
      const elapsedTime = endTime - startTime
      error.response.elapsedTime = elapsedTime.toFixed(0)
      return dispatch({
        type:CONSTANTS_APP.LOGIN_APP_01, 
        payload: error.response
      })
    }
}

export let createUserApi = (user)=> async(dispatch)=>{
  let startTime = performance.now()
  try {
    let newUser = JSON.stringify(user)
    let result = await axios.post(`${baseUrlApp01}/api/user`, newUser, {
      headers: {
        'Content-Type': 'application/json',
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


export let  getUserUsername = (dataQuery) => async(dispatch)=>{
  let startTime = performance.now()
  try {
    let result = await axios.get(`${baseUrlApp01}/api/user`,{
      params: dataQuery
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


export let  getUserUserId = (id) => async(dispatch)=>{
  let startTime = performance.now()
  try {
    let result = await axios.get(`${baseUrlApp01}/api/user/${id}`)
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


export let getMyProductsApi = (dataLogin)=>async(dispatch)=>{
  let startTime = performance.now()
  try {
    let perimission = {
        "Authorization": dataLogin.token,
        'X-CSRFToken': dataLogin["X-CSRFToken"]
    }

    let result = await axios.get(`${baseUrlApp01}/api/user/admin_product`, {
      params:{
        userId: dataLogin.id
      },
      headers: perimission,
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
