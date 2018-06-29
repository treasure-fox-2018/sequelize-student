const models = require('./models');

models.Student.findAll()
  .then (studentsData => {
    studentsData.forEach( student => {
      console.log(`id : ${student.id}`)
      console.log(`First name : ${student.first_name}`);
      console.log(`Last name : ${student.last_name}`)
      console.log(`Full name : ${student.getFullName()}`)
      console.log(`Age : ${student.getAge()}`)
      console.log(`---------------------`)
    });
  })

// console.log(`----------------------------------------------------`)
// console.log(`----------------------------------------------------`)

models.Student.getFemaleStudent('female')
  .then(outputStudents => {
    outputStudents.forEach(femaleStudent => {
      console.log(`----------------------------------------------------`)
      console.log(femaleStudent.id)
      console.log(femaleStudent.first_name)
      console.log(femaleStudent.last_name)
      console.log(femaleStudent.getFullName())
      console.log(`----------------------------------------------------`)

    })
  })

  .catch(failed => {
    console.log(failed)
  })

models.Student.create({
  first_name: "Jono",
  last_name: "Joni",
  gender: "male",
  birthday: "1997-12-23",
  height: 160,
  anotherEmail: "heppo@hotmail.com",
  anotherPhoneNumber: "1237-32003-2"
})
.catch(failed => {
  console.log(`Error Message : ------------------------------------\n\n`,failed)
})