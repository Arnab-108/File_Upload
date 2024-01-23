const express = require("express")
const {Add} = require("../Controllers/employee.controller")
const employeeRouter= express.Router()

employeeRouter.post("/add",Add)

module.exports={employeeRouter}