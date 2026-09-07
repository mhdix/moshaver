import api from "../../../services/axios"

export const loginService = async ({ email, password }: { email: string; password: string }) => {

    return await api.post('/user/login', { email, password })
}