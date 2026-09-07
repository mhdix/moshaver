import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";

const authMiddlware = (req: Request, res: Response, next: NextFunction) => {

    const token = req.cookies.token

    if (!token) {
        return res.status(401).json({
            message: "لطفاً ابتدا وارد حساب کاربری شوید",
        });
    }


    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET as string
        ) as JwtPayload

        req.user = decoded

        next()

    } catch (error) {
        return res.status(401).json({
            message: "توکن نامعتبر یا منقضی شده است",
        });
    }
}

export default authMiddlware