let argv = process.argv
let data = argv[2]
let command = argv[3]
let param = argv.slice(4)
const Controller = require("./controller.js")

if(data == "student"){
    if(command == "show"){
        Controller.showData()
    }else if(command == "age"){
        Controller.getAge(param)
    }else if(command == "female"){
        Controller.getFemale(param)
    }else if(command == "add"){
        Controller.addData(param)
    }
}
