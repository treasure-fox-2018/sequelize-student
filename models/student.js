'use strict';
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
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