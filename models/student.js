'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate : {
        isEmail: true,
        isUnique(value, next) {
          Student.find({
            where: { email : value },
            attributes: ['id']
          }).then((user) => {
            if (user) {
              next('email must be unique')
            } else {
              next()
            }
          })
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate : {
        len: {
          args : [9,14],
          msg : "Phone length must be 10-13"
        },
        isNumeric: {
          args : true,
          msg : "Phone not allow letters or symbols"
        }
      }
    },
    height: {
      type : DataTypes.INTEGER,
      validate : {
        min: 150
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function () {
    return this.firstName + ' ' + this.lastName
  }

  Student.prototype.getAge = function () {
    return 2018-Number(this.birthday.substring(0,4))
  }

  Student.getFemale = function () {
    return Student.findAll({
      where : {
        gender: 'female'
      }
    })
  }

  return Student;
};