import * as Yup from "yup";

export const SchemaContact = ()=>{
  const Schema = Yup.object({
    email: Yup.string().max(100).email("Inavlid email").required("Please enter a email"),
    message: Yup.string().required("Please enter a message"),
  })  
  return Schema 
}