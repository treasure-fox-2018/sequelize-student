const models = require('../models/index.js')

class Controller{
    constructor(){

    }
    
    static cek(){
        console.log('aa');
        
    }
    static getFullname(id){
        models.Student.findById(id)
        .then(function(objStudent) {
            console.log(objStudent.getFullName())
        })
    }

    static getAge(){
        models.Student.findAll()
        .then(function(obj){
            for(var i = 0; i < obj.length;i++){
                console.log(obj[i].getAge())
            }
        })
    }

    static getFemaleStudent(){
        models.Student.getFemale()
        .then(students =>{
            students.forEach(student => {
                var fullname = `${student.first_name} ${student.last_name}`
                console.log(student.id);
                console.log(student.first_name);
                console.log(student.last_name);
                console.log(fullname);
            });
        })
    }

    static addStudent(first_name,last_name,gender,birthday,email,phone,tinggibadan){
        models.Student.create({
            first_name : first_name,
            last_name : last_name,
            gender : gender,
            birthday : birthday,
            email: email,
            phone : phone,
            tinggi_badan : tinggibadan
        })
        .then(response => {
            console.log('berhasil');
            
        })
        .catch(err => {
            console.log(err.message);
            
        })
    }


}

// Controller.getFullname(1)
// Controller.getAge()
// Controller.getFemaleStudent()

// Controller.addStudent('helmi','yoga','male','1994-11-05','helmi@ganteng.banget',789098776896,160)

// Controller.addStudent('andre','taulani','male','1994-11-14','andre@ga.banget',789098776896,160)

module.exports = Controller