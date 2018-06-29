const Controller = require('./controller.js');

let argv = process.argv
let command = argv[2]
let id = argv[3]

if(command == 'find_fullname'){
  Controller.findFullName(argv[3]);
}else if (command == 'find_age') {
  Controller.findAge(argv[3])
}else if (command == 'find_female_student') {
  Controller.findFemaleStudent()
}
