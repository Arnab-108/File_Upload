const { employeeModel } = require("../Models/employee.model")

const Add = async (req, res) => {
    try {
        const employee = new employeeModel({
            name: req.body.name,
            designation: req.body.designation,
            email: req.body.email,
            phone: req.body.phone,
            age: req.body.age
        })
        await employee.save()
        res.status(201).send({msg:"Employee is successfully added!" , employee:employee})
    } catch (error) {
        res.status(500).send({msg:"Something went wrong" ,  error: error.message})
    }
    
}

module.exports = {Add}