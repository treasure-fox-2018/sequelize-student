'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        is: function(value, next) {
          Student.findOne({
            where: {anotherEmail : value}
          })
          .then(result => {
            if(result !== null) {
              return next("email already in use!")
            }
            else {
              return next();
            }
          })

          .catch(failed => {
            return next(`Error Message : ${failed}`)
          })
        }
      },
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: { args : [10,13], msg: "Phone length must be 10-13"},
        not: { args : ["[a-z]",'i'], msg: "Phone not allow letters"},
        not : { args: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/,
               msg : "Phone not allow alphanumeric"
             }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min :150,
      }},
    anotherEmail: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        is: function(value, next) {
            Student.findOne({
              where: {anotherEmail : value}
            })
            .then(result => {
              if(result !== null) {
                return next("email already in use!")
              }
              else {
                return next();
              }
            })

            .catch(failed => {
              return next(`Error Message : ${failed}`)
            })
        }
      },
    },
    anotherPhoneNumber: {
      type: DataTypes.STRING,
      validate: {
        len: { args : [10,13], msg: "Phone length must be 10-13"},
        not: { args : ["[a-z]",'i'], msg: "Phone not allow letters"},
        not : { args: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/,
               msg : "Phone not allow alphanumeric"
             }
      }
    }
  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`;
  }

  Student.prototype.getAge = function () {
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  Student.getFemaleStudent = (paramGender) => {
    return new Promise((resolve, reject) => {
      Student.findAll({ where: { gender: paramGender} })
        .then(outputStudents => {
          resolve(outputStudents);
        })

        .catch(failed => {
          reject(failed)
        });
    })
  }
  return Student;
};