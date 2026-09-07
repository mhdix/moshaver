import { z } from "zod";

export const createUserSchema = z.object({
    name: z.string().min(3).max(30),

    email: z.email("ایمیل معتبر نیست"),

    password: z
        .string()
        .min(8, "رمز عبور نمی‌تواند کمتر از 8 کاراکتر باشد"),
});


export const loginUserSchema = z.object({
    email: z.email("ایمیل معتبر نیست"),
    password: z
        .string()
        .min(1, "رمز عبور الزامی است"),
});