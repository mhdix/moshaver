import { Router } from "express";
import { blogAdd, blogList } from "./blog.controller.ts";

const blogRoutes = Router()


blogRoutes.get('/list', blogList)
blogRoutes.post('/add', blogAdd)

export default blogRoutes