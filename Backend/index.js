const express = require("express")
const cors = require("cors")
const {connection} = require("./db")
const { employeeRouter } = require("./Routes/employee.router")
const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home")
})

app.use("/employee",employeeRouter)

app.listen(8080,async()=>{
    try {
        await connection
        console.log("Connected to DB!")
        console.log("Server running at 8080")
    } catch (error) {
        console.log(error)
        console.log("Something went wrong!")
    }
    
})