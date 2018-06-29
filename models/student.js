'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
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
    // let age = Date.now() - dataStudent.birthday;
    // let resultAge = new Date(age);
    // return Math.abs(resultAge.getUTCFullYear() - 1970);
    // let birthday = new Date(this.birthday)
    // let now = new Date()
    // let year = birthday.getFullYear()
    // let yearNow = now.getFullYear()
    // let result = yearNow - year
    // return result
  };

  student.getFemaleStudent = function() {
    let dataFemaleStudent = student.findAll({where: {gender:"Female"}, raw:true})
    return dataFemaleStudent
  }


  return student;
};
