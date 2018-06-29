'use strict';

module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: { // email validation works if without symbol @ in value, but still cant validate redundant email address
              type: DataTypes.STRING,
              validate: {
                  is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              },
            },
    phone: { // phone validation works
              type: DataTypes.STRING,
              validate: {
                  len: {
                      args: [10,13],
                      msg: "Length must be between 10 - 13"
                  },
                  isNumeric: true,
              }
           },
    height: { // height validation works
              type: DataTypes.INTEGER,
              validate: {
                  isHeight(value) {
                      if (value < 0 || value > 150) {
                          throw new Error('Height value unvalid')
                      }
                  }
             }
           }
  }, {});

  student.prototype.getFullname = function() {
      return 'Student Name: '+this.first_name +' '+ this.last_name
  }

  student.prototype.getAge = function() {
      let studentDOB = this.birthday.slice(0, 4)
      let currentTime = new Date()
      let currentYear = currentTime.getYear() + 1900
      let studentAge = currentYear - studentDOB
      return `Student Age: ${studentAge}`
  }

  student.getFemaleStudents = function(callback) {
      student.findAll({where: {gender: 'female'}})
      .then(femaleStudents => {
          callback(femaleStudents)
      })
      .catch(err => {
          callback(null, err)
      })
  }

  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};

// Student.activate()
// student.activate()
