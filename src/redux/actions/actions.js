import axios from "axios"
import { CONSTANTS } from "./constant";


/******************************* */
export const putStateSectionApp = (section) =>{
  return {
    type: CONSTANTS.STATE_OPTION_SECTION_APP,
    payload: section
  }
}