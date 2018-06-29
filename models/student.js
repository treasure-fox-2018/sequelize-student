'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          args: true,
          msg: 'Email invalid',
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10, 13],
          msg: 'Phone length must beetween 10 - 13'
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Height must be more than 150'
        }
      }
    }
  }, {});

  //instance method
  Student.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
  };

  Student.prototype.getAge = function() {
    let birth = this.birthday.split('-')[0];
    let currentYear = (new Date()).getFullYear();

    return (currentYear - birth);
  };
  
  Student.getFemale = function() {

    return Student.findAll({
      where: {
        gender: 'female'
      }
    })
  };

  Student.addStudent = function(firstName, lastName, gender, birthday, email, phone, height) {
    return new Promise(function(resolve, reject) {
      Student.create({
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        birthday: birthday,
        email: email,
        phone: phone,
        height: height,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      .then(function(newStudent) {
        resolve(newStudent)
      })
      .catch(function(err) {
        reject(err)
      });
    })
  }

  // associate
  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};