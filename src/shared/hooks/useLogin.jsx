import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginRequest } from "../../services/api"
import toast from "react-hot-toast"

export const useLogin = () => {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const login = async (email, password) => {
    setLoading(true)

    const response = await loginRequest({
      email,
      password
    })

    setLoading(false)
    if (response.error){
      return toast.error(
        response.e?.response?.data || "Error al iniciar sesión"
      )
    }

    const { userDetails} = response.data

    console.log(userDetails)
    localStorage.setItem('user', JSON.stringify(userDetails))

    navigate('/')

  }
  return {
    login,
    isLoading
  }
}
