'use strict'

const Model = require('../models/')
const View = require('../Views/View.js')
const Students = Model.student

class Controller {
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
                console.log(findFemaleResult)
            } else {
                View.showError(err)
            }
        })
    }
}

module.exports = Controller
