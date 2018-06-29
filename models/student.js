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
      validate: {
        isEmail: {
          args: true,
          msg: 'email must contain @ and .'
        },
        isUnique: function (email, cb) {

          Student.findOne({ where: { email: email } })
            .then(function (notAvailable) {

              if (notAvailable) {
                cb(true)
              } else {
                cb(false)
              }
            })
        }
      }
    },
    phone: {
      validate: {
        len: {
          args: [10 - 13],
          msg: 'error!'
        }, isNumeric: {
          args: true,
          msg: 'its not a number'
        }

      }
    },
    tinggi_badan: {
      validate: {
        min: 150,
      }

    },

  }, {});
  Student.associate = function (models) {
    // associations can be defined here
  };


  Student.prototype.findFullName = function () {
    return `${this.first_name} ${this.last_name}`

  }

  Student.prototype.getAge = function () {
    // let birthday = new Date(this.birthday) 
    // let now = new Date()
    // let year = birthday.getFullYear()
    // let yearNow = now.getFullYear()
    // let result = yearNow - year
    // return result
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
    // return new Date()
  }

  Student.findByGender = function (gender, cb) {
    return Student.findAll({ where: { gender: gender } })
      .then(students => {
        cb(students, null)
      })
      .catch(err => {
        cb(null, err)
      })
  }
  return Student;
};

// module.exports=Student