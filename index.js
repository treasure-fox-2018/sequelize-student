const ControllerStudent = require('./controllers/student.js');
const table = process.argv[2]
const command = process.argv[3]
var param1 = process.argv[4]
var param2 = process.argv[5]
var param3 = process.argv[6]
var param4 = process.argv[7]
var param5 = process.argv[8]
var param6 = process.argv[9]
var param7 = process.argv[10]

if(table === "student"){
    if(command === "add"){
        ControllerStudent.add(param1,param2,param3,param4,param5,param6,param7)
    }else if(command === "getFullName"){
        ControllerStudent.getFullName(param1)
    }else if(command === "getFemaleStudent"){
        ControllerStudent.femaleStudent()
    }

}

