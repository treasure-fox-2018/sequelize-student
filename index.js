let Model = require ('./models')


//find age and full name of all students

// Model.Student.findAll()
//   .then((Students)=>{
//     Students.forEach(student=>{
//       console.log(student.getFullName())
//       console.log(student.getAge())
//     })
//   }).catch((err) => {
//     console.log("error message: ",err)
//   })

//RELEASE2
// var all = Model.Student.getFemaleStudent ()
//   .then (femaleStudents => {
//     femaleStudents.forEach(femaleStudent => {
//       console.log("id :",femaleStudent.id)
//       console.log("first_name :",femaleStudent.first_name)
//       console.log("last_name :",femaleStudent.last_name)
//       console.log("full_name :",femaleStudent.full_name)
//       console.log("age :",femaleStudent.age)
//       console.log("------------------------")
//     })
//   }).catch((err) => {
//     console.log("error message: ",err)
//   })  

//RELEASE 3 & 4 validate data 
Model.Student.create(
  {
    first_name: "foo",
    last_name: "bar",
    gender: "male",
    birthday: "1990-12-12",
    email: "a21@bar.com",
    phone: "123456789!",
    height : 160,
    email2: "b21@foo.com",
    phone2: "23193819a"
  }).then ( () => {
    console.log("selesai")
  })
  .catch (err => {
    console.log("error : ",err)
  })
    