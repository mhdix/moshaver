import { Router } from "express";
import { createUser, getAllUsers, getMe, getMe, loginUser, logOutUser, profileUser } from "./user.controllers";
import { validate } from "../../middleware/validate";
import { createUserSchema, loginUserSchema } from "./user.validate.ts";
import authMiddleware from "../../middleware/auth.middlware.ts";

const userRoutes = Router()


userRoutes.get('/list', getAllUsers)
userRoutes.post(
    "/create",
    validate(createUserSchema),
    createUser
);
userRoutes.get("/profile", authMiddleware, profileUser)


userRoutes.post("/login", validate(loginUserSchema), loginUser)
userRoutes.post("/logout", logOutUser)
userRoutes.get("/me", authMiddleware, getMe)

export default userRoutes