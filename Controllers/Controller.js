'use strict'

const Model = require('../models/')
const View = require('../Views/View.js')
const Students = Model.student

class Controller {
    static addStudent(studentData) {
        let studentFirstname = studentData[0]
        let studentLastname = studentData[1]
        let studentGender = studentData[2]
        let studentDOB = new Date(1994, 7, 15)
        let studentEmail = studentData[4]
        let studentPhone = studentData[5]
        let studentHeight = studentData[6]

        console.log(studentDOB)

        Students.create({
            first_name : studentFirstname,
            last_name : studentLastname,
            gender : studentGender,
            birthday : studentDOB,
            email : studentEmail,
            phone : studentPhone,
            height: studentHeight,
        })
          .then(student => console.log(`Successfully created ${student.first_name} ${student.last_name} !`))
          .catch(err => View.showError(err))
    }

    static getStudentsFullname() {
        Students.findAll()
          .then(studentsData => {
            studentsData.forEach(studentFullname => {
              View.showData(studentFullname.getFullname())
            })
          })
          .catch(err => View.showError(err))
    }

    static getStudentsAge() {
        Students.findAll()
          .then(studentsData => {
              studentsData.forEach(studentAge => {
                  View.showData(studentAge.getAge())
              })
          })
          .catch(err => View.showError(err))
    }

    static showFemaleStudents() {
        Students.getFemaleStudents(function(findFemaleResult, err) {
            if (findFemaleResult) {
                findFemaleResult.forEach(student => {
                    console.log(`Student id : ${student.id}`)
                    console.log(student.getFullname())
                    console.log(`Gender : ${student.gender}`)
                })
            } else {
                View.showError(err)
            }
        })
    }
}

module.exports = Controller
