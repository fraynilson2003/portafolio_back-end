import axios from "axios"
import { CONSTANTS } from "./constant";



/**************** GET  ***********************/
export const getAllVideogames = async(config)=>{
  let result
  try {
    if(config){
      let querys = {}
      if(config.page) querys.page = config.page
      if(config.page_size) querys.page_size = config.page_size
      if(config.orderABC) querys.orderABC = config.orderABC
      if(config.name && config.name !== "") querys.name = config.name
      if(config.gender && config.gender !== 0 && config.gender !== "0") querys.gender = config.gender

      result = await axios.get(`/videogame`, {
        params: querys
      })

    }else{
      result = await axios.get(`/videogame`)
    }



    return {
      type:CONSTANTS.GET_ALL_VIDEOGAMES, 
      payload: result.data
    }

  } catch (error) {
    let msg = (error.message? error.message : "Error en action getAllGenders")
    throw new Error(msg)
  }
}



/*************** POST  ********************* */
export const createVideogame = async(videogame)=>{
  let result
  try {
    let img = videogame.background_image
    delete videogame.background_image

    result = await axios.post("/videogame", 
    videogame)

    //submit img
    const customConfig = {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    };

    let idVid = Number(result.data.newVideogame?.id)

    const formData = new FormData();
    formData.append("image", img);
    formData.append("id", idVid);

    let resultImg = await axios.post(
      '/videogame/img', 
      formData,
      customConfig
    )

    console.log(resultImg?.data?.status);
    return result?.data?.status
  } catch (error) {
    console.log(error?.response?.data?.error);
    throw error?.response?.data?.error
  }

}
