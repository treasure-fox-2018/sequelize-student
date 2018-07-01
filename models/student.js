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
          isEmail: {
            args: true,
            msg: `invalid email` 
          },
          isUnique: function(email, next) {
            Student.find({
              where: {email: email}
            })
            .then(function(email) {
              if(email !== null) {
                next(`Email address already in use`)
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
            args: [10,13],
            msg: `Phone length must be 10 - 13`
          },
          isNumeric: {
            args: true,
            msg: `Phone not allow letters`
          },
          isAlphanumeric: {
            args: true,
            msg: `Phone not allow alphanumeric`
          }
        }
    },
    students_height: {
      type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 151,
            msg: `minimum height is 150 cm`
          }
        }
    }
  }, {});

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = (id) => {
    return Student.findOne({where: {id:id}, raw:true})
  }

  Student.prototype.getAge = (id) => {
    return Student.findOne({where: {id:id}, raw:true})
  }

  Student.getFemaleStudent = function() {
    return Student.findAll({where: {gender:"Female"},raw:true})
  }

  return Student;
};
