const model = require('./models')

class Controller {
    static findFullName(id){
        model.Student.prototype.getFullName(id).then((data_student)=>{
            console.log(`${data_student.first_name} ${data_student.last_name}`)
        })
    }

    static findAge(id){
        model.Student.prototype.getAge(id).then((data_student) => {
            console.log(data_student.birthday)
        })
    }

    static findFemaleStudents(){
        model.Student.getFemale().then((female_students) => {
            female_students.forEach(function(student){
                var fullname = student.first_name + " " + student.last_name
                console.log(student.id)
                console.log(student.first_name)
                console.log(student.last_name)
                console.log(fullname);
                
                
            })
        })
    }

    static addStudent(first_name,last_name,gender,birthday,email,phone,height){
        model.Student.newStudent(first_name,last_name,gender,birthday,email,phone,height)
        .then((student) => {
            console.log(`Data has been Added`)
        })
        .catch((err) => {
            console.log(err.message);
            
        })
    }
}

module.exports = Controller

