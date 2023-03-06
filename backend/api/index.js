import express from "express"
import cors from "cors"
import connectDB from "../config/db"
import * as dotenv from "dotenv"

dotenv.config()

connectDB()

const app = express()
const PORT = 3008

app.use(cors())

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
