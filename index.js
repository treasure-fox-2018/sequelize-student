const Controller = require('./controllers/controller')

const argv = process.argv
const command = argv[2]

console.log(`your command : ${command}`)
if(command === "register"){
    Controller.register(argv.slice(3))
}


if(command === "view"){
    Controller.viewAll()
}

if(command === "fullname"){
    Controller.viewFullName(argv[3])
}

if(command === "age"){
    Controller.viewAge(argv[3])
}

if(command === "getFemaleStudents"){
    Controller.femaleStudents()
}