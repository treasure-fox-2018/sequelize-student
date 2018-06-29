'use strict';

module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email:  
    {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: "format email is wrong"
        }
      }
    },
    phone:
    {
      type :DataTypes.STRING,
      validate:{
        len:{
          args: [10,13],
          msg:"phone number must between 10 - 13 digit"
        },
        isAlpha:{
          args: false,
          msg:"phone number not allow letters"
        },
        isAlphanumeric:{
          args: false,
          msg:"phone number not allow alphanumeric "
        }
      }
    },
    height:  
    {
      type: DataTypes.STRING,
      validate:{
        min: {
          args: 150,
          msg:"height must be more 150"      }
      
        }
    }
  }, {});
  student.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  student.prototype.getFullName = function(){
    let firstName = this.first_name
    let lastName = this.last_name
    return `"${firstName} ${lastName}"`
  }

  student.prototype.getAge = function(){
    var today = new Date();
    var birthDate = this.birthday;
    var age = today.getFullYear() - birthDate.getFullYear();
    // var m = today.getMonth() - birthDate.getMonth();
    // if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
    // {
    //     age--;
    // }
    return age;
    // var currentYear = 
  }
  
  //class method
  student.getFemaleStudent = function(){
    return new Promise (function(resolve,reject){
      student.findAll({
        where:{gender:"female"},raw :true
      }).then(function(student){
        resolve(student)
        // console.log(student);
      })
      .catch(function(err){
        reject("error coy")
        // console.log('error')
      })
    })

  }


  return student;
};