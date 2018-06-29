const Controller  = require("./controller/controller")
const argv = process.argv

const command = argv[2]
let gender

switch(command) {
  case "add": 
    const first_name = argv[3]
    const last_name = argv[4]
    gender = argv[5]
    const birthday = argv[6]
    const email = argv[7]
    const phone = argv[8]
    Controller.add(first_name, last_name, gender, birthday, email, phone)
  break
  case "getFullName": 
    Controller.getFullName();
  break
  case "getAge": 
    Controller.getAge()
  break
  case "getGender": 
    gender = argv[3]
    Controller.getGenderStudent(gender)
  break
}




