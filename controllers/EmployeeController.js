const Employee = require('../models/Employee')

const index = (req, res, next) => {
    Employee.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured!"
        })
    })
}

const show = (req, res, next) => {
    let employeeID = req.body.employeeID

    Employee.findById(employeeID)
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured!"
        })
    })
}


const store = (req, res, next) => {
    // let employeeID = req.body.employeeID
    let employee = new Employee({
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    })
    employee.save()
    .then(response => {
        res.json({
            message: "Employee Added Successfully",
            response
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured!"
        })
    })
}


const update = (req, res, next) => {
    let employeeID = req.body.employeeID
    let updateEmployee = {
        name: req.body.name,
        designation: req.body.designation,
        email: req.body.email,
        phone: req.body.phone,
        age: req.body.age,
    }

    Employee.findByIdAndUpdate(employeeID, {$set: updateEmployee})
    .then(response => {
        res.json({
            message: "Employee Updated Successfully",
            response
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured!"
        })
    })
}


const destroy = (req, res, next) => {
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(response => {
        res.json({
            message: "Employee Deleted Successfully",
            response
        })
    })
    .catch(error => {
        res.json({
            message: "an error occured!"
        })
    })
}


module.exports = {
    index, show, update, destroy, store
}