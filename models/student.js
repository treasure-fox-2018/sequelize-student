'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: DataTypes.STRING,
    phone: DataTypes.STRING
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  Student.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  Student.prototype.getAge = function () {
    var ageDifMs = Date.now() - new Date (this.birthday);
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  //class method
  Student.getFemaleStudent = function (cb) {
    Student.findAll(
      { where : {
          gender : "female"
        }
      },
      {raw:true}
    )
    .then (femaleStudents => {
      femaleStudents.forEach(femaleStudent => {
        femaleStudent.full_name = femaleStudent.getFullName()
        femaleStudent.age = femaleStudent.getAge()
      })
      cb (femaleStudents)
    })
  }

  return Student;

  
};

