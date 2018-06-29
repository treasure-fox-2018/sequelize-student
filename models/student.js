'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate:{
        isEmailUnique(value,cb){
          Student.findAll({
            where : {email:value}
          })
          .then(student=>{
            if(student.length>0){
              cb("email already use")
            }
            else{
              cb()
            }
          })
          .catch(err=>{
            throw err
          })
        },
        isEmail:{
          args:true,
          msg: "format email harus sesuai"
        }
      }
    },
    phone: {
      type: DataTypes.STRING,
      validate:{
        isAlphanumeric: {
          args:true,
          msg: "phone not allow alphanumeric"
        },isNumeric:{
          args:true,
          msg:"phone not allow letters"
        },
        len: {
          args: [10,13],
          msg: "phone length must be 10 - 13"
        }
      }
    },
    tinggi_badan: {
      type: DataTypes.INTEGER,
      validate:{
        isEven(value,cb){
          if(value>150){
            cb()
          }
          else{
            cb("tinggi badan harus diatas 150")
          }
        }
      }
    }
  }, {});
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instance getFullName
  Student.prototype.getFullName = function(){
    return this.first_name+" "+this.last_name;
  }


  //instance getAge
  Student.prototype.getAge = function(){
    var birthday = this.birthday.split('-')
    var tahun = Number(birthday[0])
    var umur = 2018-tahun
    return umur;
  }

  // class getFemaleStudent
  Student.getFemaleStudent = function(){
    return Student.findAll({
      where:{
          gender : "female"
      }
    })
  }


  return Student;
};