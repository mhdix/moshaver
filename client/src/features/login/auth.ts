import type { User } from "../../types";
import { BASE_URL } from '../../../env';

export const getMe = async (): Promise<User | null> => {
    const response = await fetch(`${BASE_URL}/users/me`, {
        credentials: "include",
    });

    if (response.status === 401) {
        return null;
    }

    if (!response.ok) {
        throw new Error("خطا در دریافت اطلاعات کاربر");
    }

    const data = await response.json();

    return data.user;
};