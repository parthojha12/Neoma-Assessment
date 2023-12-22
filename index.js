const express = require("express")
const axios = require("axios")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
const dotenv = require("dotenv")
const Weather = require("./models/Weather")
const locationRoutes = require("./routes/locationRoutes")
const specificLocationRoutes = require("./routes/specificLocationRoute")
dotenv.config();
const app = express()
app.use(bodyParser.json())

const PORT = process.env.PORT || 8080;
const DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "Mongosb connection error: "));
db.once("open", ()=>{
    console.log("Connected to database")
});

app.use(express.json())

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/src/index.html"))
})
app.use("/weathers", locationRoutes);
app.use("/", specificLocationRoutes)

app.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})



