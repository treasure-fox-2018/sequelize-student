'use strict';
module.exports = (sequelize, DataTypes) => {
var student = sequelize.define('student', {
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      gender: DataTypes.STRING,
      birthday: DataTypes.DATE,
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true,
          is: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          isUnique: function(value, callback) {
            // console.log("test");
            student.findOne({
                where: {
                  email: value
                }
              }).then(function(u) {
                if (u !== null) {
                  callback('Email address already in use!')
                } else {
                  callback();
                }
              })
              .catch(failed => {
                callback(failed)
              })
      }
    },
  },
  height: {
    validate: {
      min: 150,
    },
    type: DataTypes.INTEGER,
  },
  phone: {
    validate: {
      len: {
        args:[10, 13],
        msg: "Phone length must be b/w 10-13"
      },
      not: {
        args:["[a-z]",'i'],
        msg: "Phone not allow letters",
      },
      is: {
        args: /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?[\-\.\ \\\/]?(\d+))?$/,
        msg: "Phone not allow alphanumeric"
      }
    },
    type: DataTypes.INTEGER,
  }
}, {});
student.associate = function(models) {
  // associations can be defined here
};

student.prototype.getFullname = function() {
  return (this.first_name + this.last_name);
}

student.prototype.getAge = function() {
  var selisihAge = Date.now() - this.birthday.getTime();
  var ageDate = new Date(selisihAge);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}


student.getFemaleStudent = function() {
  return new Promise(function(resolve, reject) {
    student.findAll({
      where: {
        gender: "female"
      }
    }, {
      raw: true
    }).then((data) => {
      data.forEach((studentDatum) => {
        studentDatum.full_name = studentDatum.getFullname()
        studentDatum.age = studentDatum.getAge()
      })
      resolve(data)
    })
    //   .then((convertedData) => {
    //     console.log(convertedData);
    //   })
  });
}

return student;
}
