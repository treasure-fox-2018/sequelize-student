// let Models = require('./models')
// let Student = Models.Student
let Control = require('./controllers/controller.js')
argv = process.argv

if (process.argv[2] == 'getfemale') {
  Control.getFemale()
}

if (process.argv[2] == 'getAll') {
  Control.getAll()
}

if (process.argv[2] == 'fullname') {
  Control.getFullName()
}


if (process.argv[2] == 'add') {
  Control.addStudent(argv[3], argv[4], argv[5], argv[6], argv[7], argv[8], argv[9])
}

//
// Student.findAll()
//   .then(data => {
//     data.forEach(murid => {
//       console.log(murid.getFullName())
//     })
//   })
//
//
// Student.findAll()
//   .then(data => {
//     data.forEach(umur => {
//       console.log(umur.getAge())
//     })
//   })
//
//
//
//
//
// //coba validasi
// Student.create({
//     first_name: "handi",
//     last_name: "p",
//     gender: "male",
//     birthday: "16 Nov",
//     email: "emails",
//     phone: "081a18",
//     height: 190
//
//   })
//   .then(function (data) {
//     console.log(data)
//   })
//   .catch(function (err) {
//     console.log(err.message)
//   })
