const Model = require('../models');
const modelStudent = Model.student;

class ControllerStudent{

    static add(firstName,lastName,gender,birthday,email,phone,height){
        modelStudent.create({
            first_name:firstName,
            last_name:lastName,
            gender:gender,
            birthday:birthday,
            email:email,
            phone:phone,
            height:height
        }).then(function(){
            // ViewStudent.add()
            console.log('new data been add')
        }).catch(function(err){
            // ViewStudent.errMessage()
            console.log(err.message)
        })
    }

    static fullName(id){
        modelStudent.findById(id)
        .then(function(obj){
            let fullName = obj.getFullName()
            console.log(fullName)
        }).catch(function(){
            console.log('err full name')
        })
    }

    // var today = new Date();
    // var birthDate = new Date(dateString);
    // var age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    // {
    //     age--;
    // }
    // return age;

    static age(){
        modelStudent.findAll()
        .then(function(arr){
            for(let i = 0; i<arr.length; i++){
                let age = arr[i].getAge()
                console.log(age)
            }
        })
    }

    static femaleStudent(){
        modelStudent.getFemaleStudent()
        .then(function(students){
            students.forEach(function(student){
                let fullname = `${student.first_name} ${student.last_name}`
                console.log(student.id)
                console.log(student.first_name)
                console.log(student.last_name)
                console.log(fullname)
            })
        });
    }
}

// ControllerStudent.fullName(1)
// ControllerStudent.age()
// ControllerStudent.femaleStudent()


module.exports = ControllerStudent
