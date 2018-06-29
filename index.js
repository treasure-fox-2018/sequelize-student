const argv = process.argv
argv.splice(0,2)

const Controller = require('./controller')

const command = argv[0]


if(command=="getFullName"){
    Controller.getFullName()
}
else if(command=="getAge"){
    Controller.getAge()
}
else if(command=="getFemaleStudent"){
    Controller.getFemaleStudent()
}
else if(command=="add"){
    Controller.Add(argv[1],argv[2],argv[3],argv[4],argv[5],argv[6],argv[7])
}