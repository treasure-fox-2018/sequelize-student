const argv = process.argv
const command = argv[2]
const Controller = require('./controllers/controller.js')

if (command == 'find') {
    let id = argv[3]
    Controller.getFullName(id)
} else if (command == "age") {
    let id = argv[3]
    Controller.getAge(id)
} else if (command == "femaleStudent") {
    let id = argv[3]
    Controller.getFemaleStudent()
} else if (command == 'add') {
    let first_name = argv[3]
    let last_name = argv[4]
    let gender = argv[5]
    let birthday = argv[6]
    let email = argv[7]
    let phone = argv[8]
    let student_height = argv[9]
    Controller.addStudentData(first_name, last_name, gender, birthday, email, phone, student_height)
} 