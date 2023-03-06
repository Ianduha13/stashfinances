import express from "express"
import cors from "cors"
import connectDb from "../config/connectDb"
import * as dotenv from "dotenv"

dotenv.config()

connectDB()

const app = express()
const PORT = 3008

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", require("../routes/userRoutes"))

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
