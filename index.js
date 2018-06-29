let model = require('./models')

let argv= process.argv
let menu = argv[2]
let option = argv[3]
let data = argv.splice(4)

if(menu === 'student'){
    if(option === 'student_fullname'){
        model.Student.findAll()
            .then(studentsdata => {
                console.log(`========================`)
                studentsdata.forEach(student => {
                    
                    console.log(student.getFullName())
                });
                console.log(`========================`)
            })
            .catch(err => {
                console.log(err)
            })
    } else if(option === 'student_age'){
        model.Student.findAll()
            .then(studentsdata => {
                console.log(`========================`)
                studentsdata.forEach(student => {
                    
                    console.log(student.getFullName(), ` age: ${student.getAge()}`)
                });
                console.log(`========================`)
            })
            .catch(err => {
                console.log(err)
            })
    } else if(option === 'find_student_bygender'){
        model.Student.getStudentByGender(data[0], function(students){
            students.forEach(student => {
                console.log(`===============================`)
                console.log(student.id)
                console.log(student.getFullName())
                console.log(student.gender)
                console.log(student.age)
            })
        })
        .then(data => {
        console.log(data)
        })
    } else if(option === 'add'){
        model.Student.create(
            { 
                first_name: data[0],
                last_name: data[1],
                gender: data[2],
                birthday: data[3],
                email: data[4],
                phone: data[5],
                height: data[6]
            }
        )
        .then(user => {
            console.log(user.get({plain: true}))
        })
        .catch(err =>{
            console.log(err.message)
        })
    }
}



