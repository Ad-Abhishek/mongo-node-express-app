const express = require("express")
const routes = require("./routes/routes")

const dotenv = require("dotenv")

const mongoose = require("mongoose")

dotenv.config()

const PORT = process.env.PORT | 3000

const conStr = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@user-cluster.vpbstg6.mongodb.net/?retryWrites=true&w=majority`
// const localStr = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@user-cluster.vpbstg6.mongodb.net/test`

mongoose.connect(conStr)

mongoose.connection.on("open", () => {
    console.log("connected to mongo db atlas")
})
mongoose.connection.on("error", () => {
    console.log("connected failed")
})

const app = express()

app.use(express.json())
app.use('/api', routes)

app.listen(PORT, () => {
    console.log(`server started at ${PORT}`)
})
