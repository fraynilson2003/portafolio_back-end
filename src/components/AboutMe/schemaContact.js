import * as Yup from "yup";

export const SchemaContact = ()=>{
  const Schema = Yup.object({
    email: Yup.string().min(3).max(100).email("Enter a valid email").required("Please enter a name"),
    message: Yup.string().required("Please enter a message"),
  })  
  return Schema 
}