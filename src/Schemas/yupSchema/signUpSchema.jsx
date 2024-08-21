import * as Yup from "yup"

export const signUpSchema = Yup.object({
    email:Yup.string().email().required("Please Enter Your Email"),
    password : Yup.string().min(6).required("Please Enter Your Password")

})