import toast from "react-hot-toast"
import api from "./axios"

export const getMe = async () => {
    const getme = await api.get('/user/me')
    return getme
}

export const logout = async () => {
    const logoutUser = api.post('/user/logout')
    toast.success((await logoutUser).data.message)
    return logoutUser
}

export const singleUsr = async ({ id }: string) => {
    console.log("single user id: ", id)
    const singleUser = await api.get(`/user/single/${id}`)
    return singleUser
}