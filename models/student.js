'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }
    },
    secondEmail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true, 
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        is: function (value, next) {
          Student.findOne({where: {secondEmail: value}})
          .then(input => {
            if(input !== null) {
              return next(`Email already exist!`)
            } else {
              return next()
            }
          })
          .catch(err => {
            return next(err)
          })
        }
      }
    },
    secondPhone: {
      type: DataTypes.STRING,
      validate: {
          len: {args: [10, 13], msg: 'Phone number length must be 10-13'},
          not: {args: ["[a-z]",'i'], msg: 'Phone number should not have letters'},
          isAlphanumeric: {args: false, msg: 'Phone number should not be alphanumeric'}
      }
    }
  }, {});

  Student.prototype.getFullname = function() {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function() {
    var justYear = this.birthday.slice(0, 4);
    var currentYear = (new Date()).getYear() + 1900;
    var studentAge = currentYear - justYear;
    return `${studentAge}`;
  
  }

  Student.getFemaleStudent = function(callback) {
    Student.findAll({where: {gender: 'female'}})
      .then(femaleStudents => {
        callback(femaleStudents)
      })
  }





  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};
