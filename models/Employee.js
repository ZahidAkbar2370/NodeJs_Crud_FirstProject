const mongoose = require('mongoose');
const Schema = mongoose.Schema

const employeeSchema = new Schema({
    name:{
        type:string
    },
    designation:{
        type: string
    },
    email: {
        type: string
    },
    phone: {
        type: string
    },
    age: {
        type: number
    }
}, {timestamps: true})

const Employee = mongoose.model('Employee', employeeSchema)
module.exports = Employee