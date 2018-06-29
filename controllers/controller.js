const model = require('../models')
const Student = model.Student


class Controller {

  static addStudent(first, last, gender, birthday, email, phone, height) {


    //coba validasi
    Student.create({
        first_name: first,
        last_name: last,
        gender: gender,
        birthday: birthday,
        email: email,
        phone: phone,
        height: height

      })
      .then(function (data) {
        console.log(data)
      })
      .catch(function (err) {
        console.log(err.message)
      })



  }





  static getFemale() {
    Student.getFemaleStudent()
      .then(function (data) {
        data.forEach(function (student) {
          console.log(`id: ${student.id}`)
          console.log(`first_name: ${student.first_name}`)
          console.log(`last_name: ${student.last_name}`)
          console.log(student.getFullName())
        })

      })
  }


  static getAll() {
    Student.findAll()
      .then(function (data) {
        data.forEach(function (isi) {

          console.log(isi.getFullName())
          console.log(isi.first_name)
          console.log(isi.last_name)
          console.log(isi.gender)
          console.log(isi.birthday)
          console.log(isi.email)
          console.log(isi.height)
        })
      })
  }


  static getFullName() {
    Student.findAll()
      .then(function (data) {
        data.forEach(function (isi) {

          console.log(isi.getFullName())

        })
      })
  }








}

module.exports = Controller
