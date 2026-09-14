import mongoose from "mongoose";

const profitSchema = new mongoose.Schema({
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: "User",
    //     unique: true,
    //     required: true,
    //     index: true
    // },
    totalIncome: {
        type: String,
        required: true,
    },
    totalCost: {
        type: String,
        required: true,

    },
    financialScore: {
        type: String,

    }


}, { timestamps: true, new: true })

export const Profit = mongoose.model("Profit", profitSchema)