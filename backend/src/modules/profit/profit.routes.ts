import { Router } from "express";
import { createProfit, getAllProfit } from "./profit.controller";

const profitRoutes = Router()


profitRoutes.get("/list", getAllProfit)
profitRoutes.post("/create", createProfit)

export default profitRoutes