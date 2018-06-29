const models = require('../models')
const Student = models.Student

class Controller {
  static add(obj) {
    Student.create(obj)
      .then(student => {
        console.log(student.toJSON())
        process.exit()
      })
      .catch(err => {
        console.log(`${err.errors[0].type}: ${err.errors[0].message}`)
        process.exit()
      })
  }

  static findAll() {
    Student.findAll().then(students => {
      students.forEach(student => {
        console.log(`Full name: ${student.getFullName()}`)
        console.log(`Age: ${student.getAge()}`)
        console.log(`Gender: ${student.gender}`)
        console.log(`Email: ${student.email}`)
        console.log(``)
      })
    })
  }

  static getFemaleStudent() {
    Student.getFemaleStudent().then(students => {
      students.forEach(student => {
        console.log(`Full name: ${student.getFullName()}`)
        console.log(`Age: ${student.getAge()}`)
        console.log(`Gender: ${student.gender}`)
        console.log(`Email: ${student.email}`)
        console.log(``)
      })
    })
  }
}

module.exports = Controller