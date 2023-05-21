import { CONSTANTS_APP } from "../../apps/apis/DjangoPython/redux/constants";
import { typeOptions } from "../../apps/apis/DjangoPython/requestUser/Entities";
import { sectionsApp } from "../../components/Layouts/constants";
import { CONSTANTS } from "../actions/constant";


const initialState = {
  userApp01: {},
  selectEnities: typeOptions.GET,
  stateSectionApp: sectionsApp.aboutMe,

  allCategoriesApp01: [],
  resultApp01: {
    data: {
      api: "response api REDUCER"
    }
  }

}
  
  export const rootReducer = (state = initialState, action)=>{
    switch (action.type) {
      //options sections
      case CONSTANTS.STATE_OPTION_SECTION_APP:
        return{
          ...state,
          stateSectionApp: action.payload
        }

      //LOGIN APP 01
      case CONSTANTS_APP.LOGIN_APP_01:
        return{
          ...state,
          userApp01: action.payload.data,
          resultApp01: action.payload
        }
        break

      case CONSTANTS_APP.ENITIES_APP_01:
        return{
          ...state,
          selectEnities: action.payload,
        }

      //RESULT APP
      case CONSTANTS_APP.RESULT_APP_01:
        return{
          ...state,
          resultApp01: action.payload
        }

      case CONSTANTS_APP.GET_ALL_CATEGORIES_APP01:
        return{
          ...state,
          allCategoriesApp01: action.payload
        }

      default:
        return {
          ...state
        }
    }
  }