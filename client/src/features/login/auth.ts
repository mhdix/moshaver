import type { User } from "../../types";
import { BASE_URL } from '../../../env';
import api from "../../services/axios";

export const getMe = async (): Promise<User | null> => {
    const response = await api.get("/user/me")

    if (response.status === 401) {
        return null;
    }

    // if (!response.ok) {
    //     throw new Error("خطا در دریافت اطلاعات کاربر");
    // }


    return response;
};