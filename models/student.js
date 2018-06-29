'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      validate: {isEmail: { args: true, msg: "Your email is Wrong"}},
    },
    phone: {
      type: DataTypes.INTEGER,
      validate: {
        len: { args:[10, 13], msg: "Phone length must be b/w 10-13"},
        not: { args:["[a-z]",'i'], msg: "Phone not allow letters",},
        is: { args: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/,
              msg: "Phone not allow alphanumeric"}
      },
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 150,},
    }
  }, {});
  student.associate = function (models) {
    // associations can be defined here
  };

  student.prototype.getFullName = function (id) {
    let dataStudent = student.findOne({where: {id:id},raw:true})
    return dataStudent
  };

  student.prototype.getAge = function (id) {
    let dataStudent = student.findOne({where: {id:id},raw:true})
    return dataStudent
  };

  student.getFemaleStudent = function() {
    let dataFemaleStudent = student.findAll({where: {gender:"Female"}, raw:true})
    return dataFemaleStudent
  }

  student.addStudent = function(first_name, last_name, gender, birthday, email, phone, height){
    let newStudent = student.create({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birthday: birthday,
      email: email,
      phone: phone,
      height: height
    })
    return newStudent
  }


  return student;
};
