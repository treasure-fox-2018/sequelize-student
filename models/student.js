'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_Name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    bithday: DataTypes.DATE,
    email: {
      type:DataTypes.STRING,
    validate:{
      args:true,
      msg:'email format is wrong'
    },
    isUnique: (value, next) => {
      student.find({
        where: {
          email:value
        }
      })
      .then((result) =>{
        if(result !== null){
          return next('email is used')
        }
      })
    }
    },

    phone: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [10 - 13],
          msg:'err!'
        }, isNumeric: {
          args: true,
          msg: 'wrong number'
        }
      }
    }
    height: {
      type: DataTypes.STRING,
      validate: {min:151}
    }
  }, {});
  student.associate = function(models) {
    // associations can be defined here

  };

  student.prototype.getFullName = function(){
    return `${first_Name} ${last_name}`
  }

  student.prototype.getAge = function(){
    let age = date.Now() - this.bithday.getTime()
    let ageDate = new Date(age);
    return Math.abs(ageDate.getFullYear() - 1970)
  }

  student.findGender() = function (gender,cb){
    return student.findAll({where : {gender:gender}})
    .then(student =>{
      cb(student,null)
    })
    .catch(err =>{
      cb(null,err)
    })
  }



  return student;
};