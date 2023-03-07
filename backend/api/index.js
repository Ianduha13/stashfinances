const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv").config()
const connect = require("../config/connect")

connect()

const app = express()
const PORT = 3008

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/users", require("../routes/userRoutes"))

app.listen(PORT, () => {
	console.log(`App is running on port ${PORT}`)
})
