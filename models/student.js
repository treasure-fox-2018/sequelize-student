'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Email tidak valid"
        },
        is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        isEmailUnique: 
          function(emailInput, next) {
            Student.find({
              where: {
                email: emailInput
              }
            })
            .then(validasiEmail => {
              if (validasiEmail != null) {
                next("Email sudah ada yang menggunakan. Silahkan gunakan email yang lain")
              } else {
                next()
              }
            })
          },
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: "Phone length must be 10-13"
        },
        not: {
          args: ["[a-z]",'i'],
          msg: "Phone not allow letters"
        },
        not: {
          args: ["[a-z]",'i'],
          msg: "Phone not allow alphanumeric"
        } 
      }
    },
    tinggi_badan: {
      type: Sequelize.INTEGER,
      validate: {
        min: 150
      }
    }
  }, {});

  //instance state method
  Student.prototype.getFullName = function() {
    return this.first_name + " " + this.last_name
  }

  Student.prototype.getAge = function() {
    const age = 2018 - this.birthday.getFullYear()
    return age
  }

  //class method
  Student.getGender = function(gender, cb) {
    Student.findAll({
      where: {
        gender: {
          [Op.iLike]: `%${gender}%`
        }
      }
    })
    .then(data => {
      cb(data, null)
    })
    .catch(err => {
      cb(null, err)
    })
  }



  Student.associate = function(models) {
    // associations can be defined here
  };
  

  return Student;
};