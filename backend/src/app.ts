import express, { type Express } from "express";
import userRoutes from "./modules/users/user.routes.ts";
import ticketRoutes from "./modules/tickets/ticket.routes.ts";
import blogRoutes from "./modules/blogs/blog.routes.ts";
import cookieParser from "cookie-parser";
import cors from 'cors';

const app: Express = express()

app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true
}));

app.get('/api/v1/health', (req, res) => {
    res.json({
        message: "✅ server health: 100%"
    })
})

app.use('/api/v1/user', userRoutes)
app.use('/api/v1/ticket', ticketRoutes)
app.use('/api/v1/blog', blogRoutes)



export default app