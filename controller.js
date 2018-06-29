const Model = require('./models');
const View = require('./view');
// const Student = Model.Student;

class Controller {

    static getFullName() {
        Model.Student.findAll()
        .then(function(students) {
            students.forEach(function(student) {
                View.display(student.getFullName());
            })
        })
        .catch(function(err) {
            View.display(err)
        })
    }

    static getAge() {
        Model.Student.findAll()
        .then(function(stdData) {
            
            stdData.forEach(function(std) {
                View.display(`${std.dataValues.firstName} ${std.dataValues.lastName}. Age: ${std.getAge()}`)
                
            })
        })
        .catch(function(err) {
            View.display(err)
        })
    }

    static femaleStudent() {
        Model.Student.getFemale()
            .then(function(femaleStudent) {
                femaleStudent.forEach(function(femaleData) {
                    View.display(femaleData.dataValues)
                })
            }).catch(function(err) {
                View.display(err)
            })
    }

    static addStudent(firstName, lastName, gender, birthday, email, phone, height) {
        Model.Student.addStudent(firstName, lastName, gender, birthday, email, phone, height)
        .then(function(Student) {
            console.log(Student)
            View.display(Student.get({plain:true}))
        })
        .catch(function(err) {
            View.display(err.message)
        })
        .then(function() {
            process.exit();
        })
    }

}

module.exports = Controller;