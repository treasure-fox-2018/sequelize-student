'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Wrong email format'
        },
        isUnique: (value, next)=>{
          Student.find({
            where: {
              email: value
            }
          })
          .then((result) => {
            if(result !== null){
              return next('Another user has used that email') 
            }
          })
        }
      }
    },
    
    phone: DataTypes.STRING,
    height: {
      type: DataTypes.STRING,
      validate: {min: 151}
    },
  }, {});

  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`;
  }

  Student.prototype.getAge = function () {
    let bornArr = (this.birthday).split('-')
    let bornYear = bornArr[0]
    let bornMonth = bornArr[1]
    let bornDay = bornArr[2]

    let today = new Date();
    let thisYear = today.getFullYear();
    let thisMonth = today.getMonth();
    let thisDay = today.getDate();
    let age = thisYear - bornYear;

    if ( thisMonth <= (bornMonth))
    {
        age--;
    }
    if (((bornMonth - 1) == thisMonth) && (thisDay < bornDay))
    {
        age--;
    }
    return age;
  }

  Student.getFemaleStudents = function (cb) {
    Student.findAll({
      where: {
        gender: "Female"
      }
    })
    .then(students => {
      cb(students)
    })
  }

  Student.associate = function(models) {
    // associations can be defined here
  };
  return Student;
};