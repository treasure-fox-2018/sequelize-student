'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: {
          args:true,
          msg: 'email anda tidak valid'
        },
        isUnique: function(email, callback) {
          Student.findOne({where:{email:email}})
          .then(function(available){
            console.log(available);
            if(available) {
              callback(true);
            } else {
              callback(false)
            }
          })
        }
      }
    },
    phone: {
      type:DataTypes.STRING,
      validate: {
        len:{
          args:[10-13],
          msg: "your phone number is not fullfield length"
        },
        isNumeric:{
          args:true,
          msg: "your phone number is not valid"
        },
        isAlphanumeric:{
          args:true,
          msg:"your phone is not valid"
        }
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: {
          args: 150,
          msg: "tinggi anda masih kurang silahkan minum Scotts Emoltions"
        }
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  Student.prototype.getFullName = function(){
    // console.log('----->fullName ', this.first_name);
    let fullName = ''
    fullName = `${this.first_name} ${this.last_name}`
    return fullName;
  }
  Student.findByGender = function(gender, cb) {
        return Student.findAll({where: {gender: gender}})
        //then can be put in the app.js
        .then(studentsFemale => {
          studentsFemale.forEach(studentFemale => {
          studentFemale.fullName = studentFemale.getFullName()
          })
          cb(studentsFemale)
        })
        .catch(err => {
          console.log(err);
        })
    }
  Student.prototype.getAge = function() {
    let birthday = new Date(this.birthday) // class
    let now = new Date()
    let year = birthday.getFullYear() // getFullYear will be take a year in obj Date
    let yearNow = now.getFullYear()
    let result = yearNow - year
    return result
     // var ageDifMs = Date.now() - this.birthday.getTime();
     // var ageDate = new Date(ageDifMs); // miliseconds from epoch
     // return Math.abs(ageDate.getUTCFullYear() - 1970); // 1970 is start time UTC
  }
  return Student;
};
