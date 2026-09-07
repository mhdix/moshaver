import app from "./app"
import connectionDB from "./config/database"
import env from "./config/env"

const startServer = async (): Promise<void> => {
    try {

        await connectionDB()
        app.listen(env.PORT, () => {
            console.log(`Server running on port ${env.PORT}`);
        })

    } catch (error) {
        console.error("Failed to start server:", error);
        process.exit(1);
    }
}

startServer()