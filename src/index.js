import dotenv from "dotenv"
dotenv.config({
    path: "./env"
})

import connectDB from "./db/index.js"
import { app } from "./app.js"

const port = process.env.PORT || 8000;

connectDB()
    .then(() => {
        app.listen(port, () => console.log(`Running fine at port ${port}`))
    })
    .catch((err) => console.log("MongoDB connection failed::", err.message))
