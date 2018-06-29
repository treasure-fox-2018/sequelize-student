const Model = require('./models');
const Student = Model.Student;

class Controller {
  static getFullName(id = 0) {
    if (id > 0) {
      Student.findById(id)
       .then(function(student) {
        console.log(student.getFullName());
      });
    } else {
      Student.findAll()
       .then(function(students) {
        students.forEach(function(student) {
          console.log(student.id, student.getFullName());
        });
      });
    }
  }

  static getAge(id) {
    Student.findById(id)
     .then(function(student) {
      console.log(student.getAge());
    });
  }

  static getFemaleStudents() {
    Student.getFemaleStudents()
     .then(function(femaleStudents) {
      femaleStudents.forEach(function(student) {
        console.log(student.id);
        console.log(student.first_name);
        console.log(student.last_name);
        console.log(student.fullName);
        console.log(student.getAge());
      });
    });
  }
}

// Controller.getFemaleStudents();
// Controller.getFullName();
// Controller.getAge(1);

Student.create({
        first_name: 'Olla',
        last_name: 'La',
        gender: 'female',
        birthday: '1991-04-17',
        email: 'olla@xendit.co',
        phone: '+123456789012',
        createdAt: new Date(),
        updatedAt: new Date(),
        height: 152
      }).then(student => {
      console.log(student.phone.length);
      console.log(student.get({raw: true}));
    });
