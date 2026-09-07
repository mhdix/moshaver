import { Router } from "express";

const ticketRoutes = Router()


ticketRoutes.get('/list', (req,res) => {
    res.json({
        message: "get all tickets"
    })
})


export default ticketRoutes