'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate :{
        isEmail:true,
      }
    },
    phone:{
      type:DataTypes.STRING,
      validate : {
        len : [10,13],
        isNumber(values){
          let regex = RegExp(/[0-9]{10}/)
          if(regex.test(values) === false){
            throw new Error('phone is wrong')
          }
        } 
      }
    },
    gender: DataTypes.STRING,
    height:{
      type: DataTypes.STRING,
      validate :{
        isMinimumHeight(value){
          if(parseInt(value)< 150){
            throw new Error('minimum heigth 150 !!!!')
          }
        }
      }
    },
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //class method
  Student.getFemaleStudents = function(){  
    return new Promise(function(resolve, reject){
      Student
      .findAll({
        where:{gender:"female"}
      })
      .then(function(students){
        resolve(students)
      })
      .catch(function(err){
        reject(err)
      })
      
    })

  }

  //instance method
  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    let birthday = this.birthday
    let year = birthday.split('-')[0]
    return new Date().getFullYear() - year 
  }

  return Student;
};