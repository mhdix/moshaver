import { Request, response, Response } from "express";
import { Profit } from "./profit.model.ts";

export const getAllProfit = async (req: Request, res: Response) => {
    try {

        const profit = await Profit.find()

        console.log("Profit list: ", profit)


        res.status(201).json({
            message: "لیست سود",
            data: profit
        })

    } catch (error) {
        res.status(500).json({
            message: "خطای سرور",
            error: error
        })
    }
}

export const createProfit = async (req: Request, res: Response) => {
    try {
        const data = req.body

        console.log('profit create data: ', data)

        const createProfit = await Profit.create({ ...data })


        const profit = data.totalIncome - data.totalCost;
        const profitMargin = data.totalCost > 0 ? (profit / data.totalCost) * 100 : 0


        console.log("net profit: ", profitMargin)

        const netProfit = await Profit.findByIdAndUpdate(createProfit._id, {
            financialScore: profit
        }, { new: true })

        console.log("createProfit: ", netProfit)
        res.status(201).json({
            message: "لیست سود",
            data: profitMargin
        })

    } catch (error) {
        console.log('create profit error: ', error)
        res.status(500).json({
            message: "خطای سرور",
            error: error
        })
    }
}
