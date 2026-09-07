import { Request, Response } from "express"
import { Blog } from "./blog.model"

export const blogList = async (req: Request, res: Response) => {
    try {

        const blogs = await Blog.find()
        console.log('blog list')


        res.status(200).json({
            message: "get all blogs",
            data: blogs
        })

    } catch (error) {
        res.status(500).json({
            message: 'server error' + error
        })
    }
}

export const blogAdd = async (req: Request, res: Response) => {
    try {
        const { title, description, image } = req.body
        console.log('blog add: ', title, description, image)
        const newBlog = await Blog.create({
            title,
            description,
            image
        })

        res.status(200).json({
            message: 'add blog',
            data: newBlog
        })

    } catch (error) {
        res.status(500).json({
            message: "server error blogAdd: " + error
        })
        console.log('blogAdd error: ', error)
    }
}