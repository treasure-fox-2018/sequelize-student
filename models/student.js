'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Your email format is wrong'
        },
        isEmailUnique: function(email, callback) {
          Student.findOne({where: {email}})
           .then(function(student) {
            if (student !== null) {
              callback('Email is used');
            } else {
              callback();
            }
          });
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          args: true,
          msg: 'Phone Number don\'t allow letters or alphanumerics'
        },
        checkLength: function(phone, callback) {
          let number = '1234567890';
          let tempPhone = '';
          for (let i = 0; i < phone.length; i++) {
            if (number.indexOf(phone[i]) >= 0) {
              tempPhone += phone[i];
            }
          }
          if (tempPhone.length > 9 && tempPhone.length < 14) {
            callback();
          } else {
            callback('Phone Number must be 10 - 13 long');
          }
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 151,
          msg: 'Must be higher than 150'
        }
      }
    },
  }, {});

  Student.prototype.getFullName = function() {
    return this.first_name + ' ' + this.last_name;
  };

  Student.prototype.getAge = function() {
    let birthyear = Number(this.birthday.slice(0, 4));
    let now = new Date();
    let yearNow = now.getFullYear();
    return yearNow - birthyear;
  };

  Student.getFemaleStudents = function() {
    return Student.findAll({
      where: {gender: 'female'}
    }).then(function(femaleStudents) {
      for (let i = 0; i < femaleStudents.length; i++) {
        let student = femaleStudents[i];
        student.fullName = student.getFullName();
      }
      return femaleStudents;
    });
  };
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
