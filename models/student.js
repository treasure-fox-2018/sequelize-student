'use strict';
const Controller = require('../controllers/studentController')

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Please input the true email format!"
        },
        isUnique(value, next){
          Student.findAll({
            where: {
              email : value
            }
          })
          .then(function(emailStudent){
            if(emailStudent.length > 0){
              next('Email already exist!')
            } else{
              next()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        len : {
          args : [10,13],
          msg : "Phone length must be 10-13"
        },
        not: {
          args : ["[a-z]",'i'],
          msg : "Phone not allow letter"
        },
        isNumeric: {
          args : true,
          msg : "Phone not allow alphanumeric"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimum height 150'
        }
      }
    }
  }, {});

  Student.associate = function(models) {
    // associations can be defined here

  };

  // instance method
  Student.prototype.getFullName = function(){
    return this.firstName + " " + this.lastName
  }

  Student.prototype.getAge = function(){
    let date = new Date()
    let currentYear = date.getFullYear()
    return currentYear - this.birthday.slice(0,4)
  }

  // class method
  Student.getFemaleStudent = function(){
    return Student.findAll({
      where : {
        gender: "female"
      }
    })
  }

  return Student;
};