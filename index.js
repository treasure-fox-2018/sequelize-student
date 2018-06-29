const Controller = require('./controller')

let argv = process.argv
let command = argv[2]

if (command == 'find') {
    let id = argv[3]
    Controller.findFullName(id)
} else if (command == 'age') {
    let id = argv[3]
    Controller.findAge(id)
} else if (command == 'female') {
    Controller.findFemaleStudents()
} else if (command == 'add') {
    // first_name,last_name,gender,birthday,email,phone,height
    let first_name = argv[3]
    let last_name = argv[4]
    let gender = argv[5]
    let birthday = argv[6]
    let email = argv[7]
    let phone = argv[8]
    let height = argv[9]

    Controller.addStudent(first_name,last_name,gender,birthday,email,phone,height)
}