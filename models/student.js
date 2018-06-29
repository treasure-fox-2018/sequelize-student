'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Your email is Wrong"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10,13],
          msg: "Phone length must be 10 - 13"
        },
        isAlpha: {
          args:  false,
          msg: "Phone not allow letters"
        },
        isAlphanumeric: {
          args: false,
          msg: "Phone not allow alphanumeric"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "Min Your height is 150cm!"
        }
      }
    }
  });

  Student.associate = function(models) {
    // associations can be defined here
  };

  Student.prototype.getFullName = function(id){
    return Student.findOne({where: {id:id},raw:true})
  }

  Student.prototype.getAge = function(id){
    return Student.findOne({where: {id:id},raw:true})
  }

  Student.getFemale = function(){
    return Student.findAll({
      where: {
        gender: 'female'
      },raw:true
    })
  }

  Student.newStudent = function(first_name,last_name,gender,birthday,email,phone,height){
    return Student.create({
      first_name: first_name,
      last_name: last_name,
      gender: gender,
      birthday: new Date(birthday),
      email: email,
      phone: phone,
      height:height
    })
  }
  
  return Student;
};

