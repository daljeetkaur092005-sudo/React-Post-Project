import { useNavigate } from "react-router"
import {useForm} from "react-hook-form"
  import {useDispatch} from "react-redux"
import { loginApi } from "../State/AuthAction"
export const useAuth=()=>{
    const navigate=useNavigate()
  const {register,handleSubmit,formState:{errors},reset}=useForm()
   let dispatch=useDispatch()
    const loginSubmit=(data)=>{
      dispatch(loginApi(data))
    reset()
    }

  const registerSubmit=(data)=>{
    console.log(data)
    reset()
    }




    return {
        register,handleSubmit,errors,loginSubmit,registerSubmit,navigate
    }
}