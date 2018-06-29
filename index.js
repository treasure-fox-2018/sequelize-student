let Model = require ('./models')


//find age and full name of all students

// Model.Student.findAll()
//   .then((Students)=>{
//     Students.forEach(student=>{
//       console.log(student.getAge())
//       console.log(student.getFullName())
//     })
//   }).catch((err) => {
//     console.log("error message: ",err)
//   })

//RELEASE2
var all = Model.Student.getFemaleStudent(function (femaleStudents) {
  femaleStudents.forEach(femaleStudent => {
    console.log("id :",femaleStudent.id)
    console.log("first_name :",femaleStudent.first_name)
    console.log("last_name :",femaleStudent.last_name)
    console.log("full_name :",femaleStudent.full_name)
    console.log("age :",femaleStudent.age)
    console.log("")
  })
})

