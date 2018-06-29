const Model = require('../models')

class Student{
    static getFullName(){
        Model.Student.findAll()
        .then(function(students){
            students.forEach(student => {
                console.log(student.getFullName())
            });
        })
        .catch(function(err){
            console.log(err)
          })
    }

    static getAge(){
        Model.Student.findAll()
        .then(function(students){
            students.forEach(student => {
                console.log(student.getAge())
            })
        })
        .catch(function(err){
            console.log(err)
          })
    }

    static getFemaleStudent(){
        Model.Student.getFemaleStudent()
        .then(function(students){
            var studentwithFullName = []
            students.forEach(student => {
                let dataStudent = student.toJSON() // make the data clearly, suka ada yg tulisan" apa gitu.
                dataStudent.fullName = student.getFullName()
                studentwithFullName.push(dataStudent)
            });
            console.log(studentwithFullName)
        })
        .catch(function(err){
        console.log(err)
        })
    }

    static addStudent(firstName, lastName, gender, birthday, email, phone, height){
        Model.Student.create({
            firstName : firstName,
            lastName : lastName,
            gender : gender,
            birthday : birthday,
            email : email,
            phone : phone,
            height : height
        })
        .then(function(student){
            console.log(student.toJSON())
        })
        .catch(function(err){
            console.log(err.message)
        })
    }
}

module.exports = Student