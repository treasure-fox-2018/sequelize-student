'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              isUnique: function(value, next){
                Student.find({where: {email: value}})
                .then(email => {
                  if(email !== null){
                    return next('email is already used here')
                  } else {
                    next()
                  }
                })
              },
              isEmail: {
                args: true,
                msg: 'email is not valid'
              }}
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: 'Phone length must be 10 till 13',
        },
        not: {
          args: ["[a-z]",'i'],
          msg: `There's letter on your phone number`
        },
        isAlphanumeric: {
          args: true,
          msg: `There's alphanumeric on your phone number`
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: 'Minimal height is 150 cm'
        },
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  Student.getStudentByGender = function(gender,callback){
    return Student.findAll({where: {gender: `${gender}`}})
      .then(students => {
        students.forEach(student => {
         student.full_name = student.getFullName()
        });
        callback(students)
    })
  }
  return Student;
};