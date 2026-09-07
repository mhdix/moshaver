import mongoose from "mongoose"

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    tags: { type: String, default: "مشاوره" },
})

export const Blog = mongoose.model("Blog", blogSchema)