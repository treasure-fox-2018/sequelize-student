"use strict"

const models = require('./models');

// models.student.findAll().then((studentData) => {
//   studentData.forEach((studentDatum) => {
//     console.log(studentDatum.getFullname());
//     console.log(studentDatum.getAge());
//   })
// })
//
// models.student.getFemaleStudent().then((data) => {
//   data.forEach((studentDatum) => {
//     console.log(studentDatum.full_name);
//     console.log(studentDatum.age);
//   })
// });

models.student.create({
  first_name: "Hilio",
  last_name: "Kaka",
  gender: "male",
  birthday: new Date(),
  email: "hahahahahah9lllllll@gmail.com",
  phone: "&&&&#^^#@*&#*@)",
  createdAt: new Date(),
  updatedAt: new Date(),
  email2: "hahha@gmail.com",
  height: 190,
  phone2: 1927361,
})
.then(() => {
  console.log("Success!");
})
.catch((err) => {
  if (err.msg !== undefined) {
    console.error(err.msg);
  }

  if (err.message !== undefined) {
    console.log(err.message);
  }
})
