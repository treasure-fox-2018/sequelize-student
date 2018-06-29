const argv = process.argv;
const Controller = require('./controller.js');
const content = argv.slice(4)

if(argv[2] == 'student') {
    if(argv[3] == 'add') {
        // node index.js student add [first_name last_name gender birthday email phone height]
        Controller.addStudent(content[0], content[1], content[2], content[3], content[4], content[5], content[6]);

    } else if(argv[3] == 'fullname') {
        // node index.js student fullname
        Controller.getFullName();

    } else if(argv[3] == 'age') {
        // node index.js student age
        Controller.getAge();

    } else if(argv[3] == 'getFemale'){
        // node index.js student getFemale
        Controller.femaleStudent();

    } else {
        console.log('Invalid input')
    }
} else {
    console.log('Wrong input')
}