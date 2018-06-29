const argv = process.argv
const command = argv[2]
const args = argv.slice(3)
const Controller = require('./controllers/controller.js')

switch(command) {
  case 'add':
    let input = { 
      firstName: args[0],
      lastName: args[1],
      gender: args[2],
      birthday: args[3],
      email: args[4],
      phone: args[5]
    }
    Controller.add(input)
    break;
  case 'findAll':
    Controller.findAll()
    break;
  case 'getFemaleStudent':
    Controller.getFemaleStudent()
    break;
  default:
}




