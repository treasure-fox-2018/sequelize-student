const Model = require ('../models/index.js')

class Controller {
    static getFullName(id) {
        Model.Student.prototype.getFullName(id) 
        .then((dataStudent) => {
            var fullName = `${dataStudent.first_name} ${dataStudent.last_name}`
            console.log(fullName)
        })

        .catch((err) => {
            console.log('id is invalid')
        })
    }

    static getAge(id) {
        Model.Student.prototype.getAge(id)
        .then((dataAge) => {
            var age = Date.now() - dataAge.birthday.getTime()
            var resultAge = new Date(age)
            console.log(Math.abs(resultAge.getUTCFullYear()-1970))
        })

        .catch((err) => {
            console.log('id is invalid')
        })
    }

    static getFemaleStudent() {
        Model.Student.getFemaleStudent() 
        .then((dataFemaleStudent) => {
            // for (let i in dataFemaleStudent) {
            //     let fullName = `${dataFemaleStudent[i].first_name} ${dataFemaleStudent[i].last_name}`
            //     console.log(dataFemaleStudent[i].id)
            //     console.log(dataFemaleStudent[i].first_name)
            //     console.log(dataFemaleStudent[i].last_name)
            //     console.log(fullName)
            // }
            dataFemaleStudent.forEach(function(dataFemaleStudent) {
                var fullName = `${dataFemaleStudent.first_name} ${dataFemaleStudent.last_name}`
                console.log(dataFemaleStudent.id)
                console.log(dataFemaleStudent.first_name)
                console.log(dataFemaleStudent.last_name)
                console.log(fullName)
            })
        })
    }

    static addStudentData(first_name, last_name, gender, birthday, email, phone, student_height) {
        Model.Student.create({
            first_name: first_name,
            last_name: last_name,
            gender: gender,
            birthday: birthday,
            email: email,
            phone: +(phone),
            students_height: student_height
        })

        .then(function(response) {
            console.log(`success add data`)
        })

        .catch(function(err) {
            console.log(err.message)
        })
    }
}

module.exports = Controller