import toast from "react-hot-toast"
import api from "./axios"
import { useAuth } from "../context/authContext"
const { setUser} = useAuth()
export const getMe = async () => {
    const getme = await api.get('/user/me')
    return getme
}

export const logout = async () => {
    const logoutUser = api.post('/user/logout')
    toast.success((await logoutUser).data.message)
    setUser(false)
    return logoutUser
}