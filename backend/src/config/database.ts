





import mongoose from 'mongoose'
import env from './env'



const connectionDB = async () => {

    if (!env.MONGODB_URL) {
        throw new Error("MONGODB_URL is not defind")
    }
    await mongoose.connect(env.MONGODB_URL)
    console.log('Server connected on port: ', env.PORT)

}

export default connectionDB