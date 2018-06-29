'use strict'

const Model = require('../models/')
const View = require('../Views/View.js')
const Students = Model.student

class Controller {
    static getStudentFullname() {
        Students.findAll()
          .then(studentsData => {
            studentsData.forEach(dataStudent => {
              console.log(dataStudent.getFullname())
            })
          })
          .catch(err => View.showError(err))
    }
}

module.exports = Controller
