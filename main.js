const model = require('./models/');


// model.Student.findAll()
// .then(dataStudents => {
//     dataStudents.forEach(student => {
//         console.log(`Full name:`, student.getFullname())
//     })
    
//     // console.log(dataStudents);
// })
// .catch(err => {
//     console.log(err)
// })

// model.Student.findAll()
// .then(ageData => {
//     ageData.forEach(studentAge => {
//         console.log(`Age:`, studentAge.getAge())
//     })
// })
// .catch(err => {
//     console.log(err)
// })

// model.Student.getFemaleStudent(function(output) {
//     output.forEach(femaleStudent => {
//         console.log(femaleStudent.getFullname())
//     })
// })

model.Student.create({
    first_name: "Kevin",
    last_name: "Norwalk",
    gender: "male",
    birthday: "1993-11-15",
    height: 172,
    secondEmail: "pluse@umail.com",
    secondPhone: "65sh43-21:23-456" 
})
.catch(err => {
    console.log(err)
})
