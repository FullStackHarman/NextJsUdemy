import mongoose from "mongoose";

export async function connectDB() {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on("connected", () => {
            console.log("Connected to database")
        })
        connection.on("error", (error) => {
            console.log(error)
        })
    } catch (error) {
        console.log(error)
        console.log("Failed to connect to database")
    }
}