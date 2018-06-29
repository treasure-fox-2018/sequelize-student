'use strict';

module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});

  student.prototype.getFullname = function() {
      return 'Student Name: '+this.first_name +' '+ this.last_name
  }

  student.prototype.getAge = function() {
      let studentDOB = this.birthday.slice(0, 4)
      let currentTime = new Date()
      let currentYear = currentTime.getYear() + 1900
      let studentAge = currentYear - studentDOB
      return `Student Age: ${studentAge}`
  }

  student.getFemaleStudents = function(callback) {
      student.findAll({where: {gender: 'female'}})
      .then(femaleStudents => {
          callback(femaleStudents)
      })
      .catch(err => {
          callback(null, err)
      })
  }

  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};
