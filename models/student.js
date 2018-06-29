'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    phone: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          args: true,
          msg: "Phone number does not allow letters"
        },
        validatePhone(phone) {
          if (phone.length < 10 || phone.length > 13) {
            throw new Error('Phone number length must be 10 - 13')
          }
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email is not valid'
        },
        isUnique(value, next) {
          Student.findOne({ where: { email: value } })
            .then(function(student){
              if (student) { next('Email already exists') }
              else { next() }
            })
            .catch(err => console.error(err))
        }
      }
    }
  }, {});

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.getFemaleStudent = function() {
    return Student.findAll({ where: { gender: 'female' } })
  }

  Student.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
  }

  Student.prototype.getAge = function() {
    let currDate = new Date()
    let birthYear = +(this.birthday.substring(0, 4))
    return `${currDate.getFullYear() -  birthYear}`
  }

  return Student;
};