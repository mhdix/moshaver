import { Request, Response } from "express";
import { User } from "./user.model.ts"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { createUserSchema, loginUserSchema } from "./user.validate";

export const getAllUsers = async (req: Request, res: Response) => {
    try {

        const userList = await User.find()

        res.status(200).json({
            message: "get all users",
            data: userList
        })


    } catch (error) {
        console.log('get all users error: ', error)
    }
}

export const createUser = async (req: Request, res: Response) => {

    try {

        const result = createUserSchema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "اطلاعات وارد شده نا معتبر است",
                data: null,
                error: result.error.issues
            })
        }

        const { name, email, password } = req.body

        const safeEmail = await User.find({ email: email })
        if (safeEmail.length > 0) {
            return res.status(400).json({
                message: "ایمیل تکراری است",
                data: null
            })
        }


        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = User.create({ name, email, password: hashedPassword })


        res.status(201).json({
            message: "create user successfully",
            data: newUser
        })

    } catch (error) {
        console.log('get all users error: ', error)
        res.status(500).json({
            message: 'مشکل سرور'
        })
    }

}
export const loginUser = async (req: Request, res: Response) => {
    try {

        const result = loginUserSchema.safeParse(req.body)

        if (!result.success) {
            return res.status(400).json({
                message: 'ورود ناموفق است',
                error: result.error
            })
        }

        const user = await User.findOne({
            email: result.data.email
        })
        console.log('login line 80: ', user, result.data.email)

        if (!user) {
            throw new Error("کاربری با این ایمیل پیدا نشد");
        }

        
        const comparePassword = await bcrypt.compare(result.data.password, user.password)

        if (!comparePassword) {
            return res.status(400).json({
                message: 'رمز عبور شما اشتباه است'
            })
        } if (result.data.email !== user?.email) {
            return res.status(400).json({
                message: 'ایمیل شما اشتباه است'
            })
        }


        const token = jwt.sign(
            {
                userId: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET as string,
            { expiresIn: "7d" }
        )

        res.cookie("token", token, {
            httpOnly: true,
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        })

        res.status(200).json({
            message: "شما وارد شدید",
            data: {
                id: user._id,
                name: user.name,
                email: user.name,
                role: user.role
            }
        })

    } catch (error) {
        // const err = error
        console.log('login error: ', error)
        res.status(500).json({
            message: "ورود ناموفق است",
            error: error
        })
    }
}


export const profileUser = async (req: Request, res: Response) => {
    try {

        const userId = req.user?.userId
        if (!userId) {
            return res.status(401).json({
                message: "کاربر احراز هویت نشده است",
            });
        }
        const user = await User.findById(userId).select(
            "-password"
        );

        if (!user) {
            return res.status(404).json({
                message: "کاربر پیدا نشد",
            });
        }


        res.status(200).json({
            message: "see profile",
            data: user
        })


    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "خطای سرور",
        });
    }
}


export const logOutUser = async (req: Request, res: Response) => {
    res.clearCookie("token", {
        httpOnly: true,
        sameSite: "lax"
    })

    return res.status(200).json({
        message: "با موفقیت خارج شدید",
    });

}

export const getMe = async (req: Request, res: Response) => {

    try {

        const userId = req.user?.userId


        if (!userId) {
            return res.status(401).json({
                message: "احراز هویت نشده‌اید",
            })
        }

        const user = await User.findById(userId).select("-password")
        console.log('getme: ', user)

        if (!user) {
            return res.status(404).json({
                message: "کاربر پیدا نشد",
            });
        }

        return res.status(200).json({
            data: user,
        });

    } catch (error) {
        console.log('getme Err: ', error)
        return res.status(500).json({
            message: "خطای سرور",
            error: error
        });
    }

}