'use strict'

const Controller = require('./Controllers/Controller')
const argv = process.argv

let studentData = argv.slice(2)

// console.log(studentData);

Controller.addStudent(studentData)

// Controller.getStudentsFullname()

// Controller.getStudentsAge()

// Controller.showFemaleStudents()
