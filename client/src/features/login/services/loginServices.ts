import api from "../../../services/axios"

export const loginService = async ({ email, password }: { email: string; password: string }) => {

   const loginService =  await api.post('/user/login', { email, password })
   console.log('loginService: ', loginService)
   
    return loginService
}