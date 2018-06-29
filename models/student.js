'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 150
      }

    },

    birthday: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: "Must be an email! / FIX your email format! "
        },

        //custom validation
        isUnik(value, cb) {
          Student.findAll({
              where: {
                email: value
              }
            })
            .then(function (emails) {
              if (emails.length !== 0) {
                cb("Email sudah ada: !!!")
              } else {
                cb()
              }
            })
        }
        //end (isUnik )cust. validation


      }



    },

    phone: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "harus alfanumerik"
        },
        islength(data, cb) {
          if (data.length >= 10 && data.length <= 13) {
            cb()
          } else {
            cb("nomor telp harus antara 10 - 13 digit")
          }


        }


      }


    }








  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };



  // Instance Method
  Student.prototype.getFullName = function () {
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function () {
    let date = new Date()
    return (date.getFullYear() - +this.birthday.split('-')[0])
  }




  // Class Method
  Student.getFemaleStudent = function () {
    return Student.findAll({
      where: {
        gender: "female"
      }
    })
  }







  return Student;
};
