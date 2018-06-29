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
      return this.first_name +' '+ this.last_name
  }

  student.associate = function(models) {
    // associations can be defined here
  };
  return student;
};
