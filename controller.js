const model = require('./models')
const Student = model.Student

class Students{
    static getFullName(){
        Student.findAll()
        .then(students=>{
            students.forEach(student => {
                var studentFullName = student.getFullName()
                console.log(studentFullName);
            });
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static getAge(){
        Student.findAll()
        .then(students=>{
            students.forEach(student=>{
                var studentAge = student.getAge()
                console.log(studentAge);
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static getFemaleStudent(){
        Student.getFemaleStudent()
        .then(studentsFemale=>{
            var StudentsFemale = []
            studentsFemale.forEach(student => {
                var objStudent = student.toJSON()
                objStudent.full_name = student.getFullName()
                StudentsFemale.push(objStudent)
            });
            console.log(StudentsFemale);
        })
        .catch(err=>{
            console.log(err);
        })
    }
    static Add(fName,lName,gender,bday,email,phone,height){
        Student.create({
            first_name:fName,
            last_name:lName,
            gender:gender,
            birthday:bday,
            email:email,
            phone:phone,
            tinggi_badan:height
        })
        .then(student=>{
            console.log(student.toJSON());
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
}


module.exports = Students 