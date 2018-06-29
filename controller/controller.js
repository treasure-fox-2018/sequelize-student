const Model = require("../models")
const View = require("../view/view")

class Controller {
  static add (first_name, last_name, gender, birthday, email, phone, tinggiBadan) {
    Model.Student.create({first_name: first_name, last_name: last_name, gender: gender, birthday: birthday, email: email, phone: phone, tinggi_badan: tinggiBadan})
      .then(data => {
        const dataStudent = data.get({plain: true})
        View.messageInfo(dataStudent)  
      })
      .catch(errAdd => {
        View.messageErr(errAdd)
      })
  }

  static getFullName () {
    Model.Student.findAll()
    .then(data => {
      data.forEach(dataStudent => {
        const fullName = dataStudent.getFullName()
        View.messageInfo(fullName)
      })
    })
    .catch(errGetFullName => {
      View.messageErr(errGetFullName)
    })
  }

  static getAge () {
    Model.Student.findAll()
      .then(data => {
        data.forEach(dataAgeStudent => {
          const dataAge = dataAgeStudent.getAge() 
          View.messageInfo(dataAge)
        })
      })
      .catch(errGetAge => {
        View.messageErr(errGetAge)
      })
  }

  static getGenderStudent (gender) {
    Model.Student.getGender(gender, (data, err) => {
      if (data != false) {
        View.femaleStudent(data)
      } else {
        View.messageErr(err)
      }
    })
  }
}

Controller.add("alex", "qur", "male", "1959-08-14", "adhajsahjdx@yahoo.co", "085727877372", 172)

module.exports = Controller