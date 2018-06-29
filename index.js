const controller = require('./controller/controller.js')
var argv = process.argv

if(argv[2] === 'add'){
    var first_name = argv[3]
    var last_name = argv[4]
    var gender = argv[5]
    var birthday = argv[6]
    var email = argv[7]
    var phone = argv[8]
    var tinggibadan = argv[9]
    controller.addStudent(first_name,last_name,gender,birthday,email,phone,tinggibadan)
}else if(argv[2] === 'fullname'){
    controller.getFullname(argv[3])
}else if(argv[2] === 'getAge'){
    controller.getAge()
}else if(argv[2] === 'getFemaleStudent'){
    controller.getFemaleStudent()
}
