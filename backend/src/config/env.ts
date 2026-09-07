import dotenv from "dotenv"


dotenv.config()

interface Ienv {
    PORT: number;
    MONGODB_URL: string;
}

const env: Ienv = {
    PORT: Number(process.env.PORT) || 5000,
    MONGODB_URL: process.env.MONGODB_URL || ""
}

export default env