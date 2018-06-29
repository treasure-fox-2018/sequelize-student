const Controller = require('./controllers/studentController')
const argv = process.argv.slice(2)
const command = argv[0]
const firstName = argv[1]
const lastName = argv[2]
const gender = argv[3]
const birthday = argv[4]
const email = argv[5]
const phone = argv[6]
const height = argv[7]

if(command === "getFullName"){
    Controller.getFullName()
}
if(command === "getAge"){
    Controller.getAge()
}
if(command === "getFemaleStudent"){
    Controller.getFemaleStudent()
}
if(command === "add"){
    Controller.addStudent(firstName, lastName, gender, birthday, email, phone, height)
}