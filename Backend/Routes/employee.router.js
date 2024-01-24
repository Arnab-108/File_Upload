const express = require("express")
const {Add} = require("../Controllers/employee.controller")
const { uploads } = require("../Middlewares/Upload")
const employeeRouter= express.Router()

employeeRouter.post("/add", uploads.single('avatar'),Add)

module.exports={employeeRouter}