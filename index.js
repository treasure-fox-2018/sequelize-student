const Model = require('./models')

let args = process.argv
let command = process.argv[2]
let task = process.argv[3]
let input = process.argv.splice(4)

if (command == 'getStudentsFullName') {
  Model.student.findAll().then(function(students){
    students.forEach(student => {
      console.log(student.getFullName());
    })
  })
}else if (command == 'getStudentsAge') {
  Model.student.findAll().then(function(students){
    students.forEach(student => {
      console.log(`${student.getFullName()}: ${student.getAge()}`);
    })
  })
}else if (command == 'getStudentByGender') {
  Model.student.findByGender(task, function(students){
    students.forEach(student => {
      console.log(student.id);
      console.log(student.first_name);
      console.log(student.last_name);
      console.log(student.full_name);
    })
  })
}else if (command == 'student') {
  if (task == 'add') {
    Model.student.create({first_name:`${input[0]}`,last_name:`${input[1]}`,gender:`${input[2]}`,birthday:`${input[3]}`,email:`${input[4]}`,phone:`${input[5]}`,height:`${input[6]}`})
    .then(function(student){
      let newStudent = student.get()
      console.log('Data successfully added!')
      console.log(newStudent)
    })
  }else if (task == 'delete') {
    Model.student.destroy({where: {id:input[0]}})
    .then(function(author){
      console.log(`Data successfully deleted on id: ${input[0]}`)
    })
  }
}
