import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },

        password: {
            type: String,
            required: true,
        },
        phoneNumber: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "inactive"
        },
        role: {
            type: String,
            enum: ["admin", "user"],
            default: "user"
        },
        profit: {
            type: mongoose.Schema.ObjectId,
            ref: "Profit"
        }
    },
    {
        timestamps: true,
    }
);

export const User = mongoose.model("User", userSchema);
