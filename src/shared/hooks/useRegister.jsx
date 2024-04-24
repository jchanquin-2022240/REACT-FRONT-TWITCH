import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { register as registerResquest } from "../../services/api"
import toast from "react-hot-toast"

export const useRegister = () => {
  const [isLoading, setLoading] = useState(false)
  const navigate = useNavigate()
  const register = async (email, password, username) => {
    setLoading(true)

    const response = await registerResquest({
      email,
      password,
      username
    })

    setLoading(false)
    if (response.error){
      return toast.error(
        response.e?.response?.data || "Error al iniciar sesión"
      )
    }

    const { userDetails} = response.data

    localStorage.setItem('user', JSON.stringify(userDetails))

    navigate('/')

  }
  return {
    register,
    isLoading
  }
}
