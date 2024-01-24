const mongoose = require("mongoose")

const employeeSchema = mongoose.Schema({
    name:{type:String , required:true},
    designation:{type:String , required:true},
    email: {type:String , required:true},
    phone: {type:Number},
    age: {type:Number},
    avatar: {type:String}
},{
    timestamps:true,
    versionKey:false
})

const employeeModel = mongoose.model('employee' , employeeSchema)

module.exports = {employeeModel}