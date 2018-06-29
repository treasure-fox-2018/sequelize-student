const Model = require('./models');
const faker = require('faker')

class App {
  static getFullName() {
    Model.Student.findAll({raw:true})
      .then(dataStudents => {
        dataStudents.forEach(student => {
          console.log(student);
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  static getAge() {
    Model.Student.findAll()
      .then(studentsAge => {
        studentsAge.forEach(studentAge => {
          console.log(studentAge.getAge());
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  static getFemaleStudent() {
    Model.Student.findByGender("Female", function(femaleStudents) {
      femaleStudents.forEach(femaleStudent => {
        console.log(femaleStudent.id);
        console.log(femaleStudent.first_name);
        console.log(femaleStudent.last_name);
        console.log(femaleStudent.fullName);
      })
      // console.log(femaleStudents);
    })
  }

  static insertStudent() {
    Model.Student.create({
      first_name: 'Aby',
      last_name: 'kosasih',
      gender: 'Male',
      birthday: faker.date.between('1990-01-01', '2000-12-31'),
      email: 'aby12@gmail.com',
      phone: '0827213123124',
      height: 151
    })
    .then(success => {
      console.log('Data berhasil di tambah');
    })
    .catch(err => {
      console.log(err.message);
    })
  }
}

// App.getFullName()
// App.getAge()
// App.getFemaleStudent()
App.insertStudent()
