'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type : DataTypes.STRING,
      validate : {
        isEmail : {
          args : true,
          msg : "email is not valid"
        },isUnique(value,cb){
          Student.findAll({where : {email : value}})
          .then(function(data){
            if(data.length > 0){
              cb("email has already taken")
            }else{
              cb()
            }
          })
          .catch(function(err){
            console.log(err)
          })
        }
      }
      
    },
    phone: {
      type :DataTypes.STRING,
      validate : {
        isNumeric : {
          args : true,
          msg : "numeric only"
        },isLength(value,cb){
          if(value.length >9 && value.length < 14){
            cb()
          }else{
            throw new Error("phone length must be 10-13")
          }
        }
      }
    },
    height : {
      type : DataTypes.STRING,
      validate : {
        isHeight(value,cb){
          if(Number(value) < 150){
            throw new Error("max height is 150")
          }else{
            cb()
          }
        }
      }
    }
  }, {});
  Student.showData = function() {
    // associations can be defined here
    return Student.findAll()
  };

  Student.prototype.getFullName = function(){
    let full_name = this.first_name + " " + this.last_name
    return full_name
  }

  Student.prototype.getAge = function(){
    let year = this.birthday.slice(0,4)
    let age = 2018 - Number(year)
    return age
  }

  Student.getFemale = function(){
    return Student.findAll({
      where : {
        gender : "female"
      }
    })
  }
  

  return Student;
};