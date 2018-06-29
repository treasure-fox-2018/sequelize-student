'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATEONLY,
    email: {
      validate: {
        isEmail: true,
        is : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
        isUnique : function (value,next) {
                Student.findOne({
                  where: {email: value}
                }).then (result => {
                  if (result !== null) {
                    return next("email already in use")
                  } else next ()
                  
                }).catch (err => {
                  return next("error message: ",err)
                })
             }
      },
      type: DataTypes.STRING,
    },
    phone: {
      validate: {
        len : { args : [10,13] , msg : "Phone length must be 10 -13"}
      },
      validate: {
        not : { args : ["[a-z]",'i'] , msg : "Phone not allow letter"}
      },
      validate: {
        is : { args : /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/ , msg : "Phone not allow alphanumeric"}
      },
      type : DataTypes.STRING
    },
    height : {
      validate: {
        min: { args: [150], msg: "minimum length 150 cm"}
      },
      type: DataTypes.INTEGER
    },
    email2: {
      validate: {
        isEmail: true,
        is : /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
        isUnique : function (value,next) {
              Student.findOne({
                where: {email2: value}
              }).then (result => {
                if (result !== null) {
                  return next("email already in use")
                } else next ()
                
              }).catch (err => {
                return next("error message: ",err)
              })
       }
      },
      type: DataTypes.STRING
    },
    phone2: {
      validate: {
        len : { args : [10,13] , msg : "Phone length must be 10 -13"}
      },
      validate: {
        not : { args : ["[a-z]",'i'] , msg : "Phone not allow letter"}
      },
      validate: {
        is : { args : /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/ , msg : "Phone not allow alphanumeric"}
      },
      type : DataTypes.STRING
    }
  },
  {

  });
  Student.associate = function(models) {
    // associations can be defined here
  };

  //instance method
  Student.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  Student.prototype.getAge = function () {
    var ageDif = Date.now() - new Date (this.birthday);
    var ageDate = new Date(ageDif);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  //class method
  Student.getFemaleStudent = function () {
    return new Promise ((resolve, reject) => {
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
        resolve (femaleStudents)
      }).catch((err) => {
        reject(err)
      })
    })
    
  }

  return Student;

  
};

