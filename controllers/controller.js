const model = require('../models')
const View = require('../views/view')
const Student = model.Student

class NewStudent{
    constructor(first_name, last_name,birthday,email,phone,gender,height){
        this.first_name = first_name
        this.last_name =last_name
        this.birthday = birthday
        this.email = email
        this.phone = phone
        this.gender = gender
        this.height = height
    }
}


class Controller{
    static viewAll(){
        Student
        .findAll()
        .then(function(students){
            View.viewAll(students)
        })
        .catch(function(err){
            View.viewAll(err)
        })
    }

    static register(record){
        let newStudent = new NewStudent(...record)
        
        Student
        .create(newStudent)
        .then(function(student){
            console.log(student.toJSON())
        })
        .catch(function(err){
            let errors = err.errors
            errors.forEach(el=>{
                console.log(el.message)
            })
        })
    }

    static viewFullName(id){
        Student
        .findById(id)
        .then(function(student){
            console.log(student.getFullName())
        })
    }

    static viewAge(id){
        Student
        .findById(id)
        .then(function(student){
            console.log(student.getAge())
        })
    }

    static femaleStudents(){
        
        Student
        .getFemaleStudents() 
        .then(function(students){
            View.viewAll(students)
        })
        .catch(function(err){
            console.log(err)
        })
    }
}

module.exports = Controller