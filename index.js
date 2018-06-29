const Controller = require('./controller.js');

let argv = process.argv
let command = argv[2]
let id = argv[3]
let first_name = argv[3]
let last_name = argv[4]
let gender = argv[5]
let birthday = argv[6]
let email = argv[7]
let phone = argv[8]
let height = argv[9]

if(command == 'find_fullname'){
  Controller.findFullName(argv[3]);
}else if (command == 'find_age') {
  Controller.findAge(argv[3])
}else if (command == 'find_female_student') {
  Controller.findFemaleStudent()
}else if (command == 'add_student') {
  Controller.AddNewStudent(first_name, last_name, gender, birthday, email, phone, height)
}
