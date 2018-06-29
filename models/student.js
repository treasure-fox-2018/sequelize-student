'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {type:DataTypes.STRING,
      validate:{isEmail:true,
      unique: function(value,next) {
        student.find({
          where: {email: value}
        })
        .then(email=>{
          if (email !== null) {
            return next('email is already used')
          }else {
            next()
          }
        })
        .catch(err=>{
          return next('error')
        })
      }},
    },
    phone: {type: DataTypes.STRING,
      validate:{
        isAlphanumeric:{
          args: true,
          msg: 'only number is allowed for phone number'
        },
        not:{
          args: ["[a-z]",'i'],
          msg: 'letter is not allowed for phone number'
        },
        len:{
          args: [10,13],
          msg: 'phone number must be 10 to 13 numbers'
        }
      }
    },
    height: {type:DataTypes.INTEGER,
      validate:{
        min: {
          args: 150,
          msg: 'you must be 150cm or taller in height'
    }}}
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };
  student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }
  student.prototype.getAge = function () {
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  student.findByGender = function(genderParameter, callback) {
    student.findAll({where: {gender: genderParameter}})
    .then (students => {
      students.forEach(student =>{
        student.full_name = student.getFullName()
      })
      callback(students)
    })
  }
  return student;
};
