'use strict';
module.exports = (sequelize, DataTypes) => {
  var Student = sequelize.define('Student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    gender: DataTypes.STRING,
    birthday: DataTypes.DATE,
    email: 
      {
        type : DataTypes.STRING,
        validate : {isEmail: {
                        args : true,
                        msg: "format email salah"
                    }
        }
      },
    phone: {type : DataTypes.INTEGER,
            validate : {len             :{args :[10,13], msg : "panjang minimal 10 sampai 13"} ,
                        isNumeric: {args : true, msg : 'tak boleh hruf'},
                        isAlphanumeric  :{args : false, msg : "tidak boleh alphanumeric"}
                       }
           },
    tinggi_badan : { type : DataTypes.INTEGER,
                     validate : { min : {args : 151,
                               msg : "tinggi badan minimal 151"} 
                             }
                   }
  },  {});

  Student.associate = function(models) {
    // associations can be defined here
    // console.log('a');
    
  };

  Student.prototype.getFullName = function(){
    return `${this.first_name} ${this.last_name}`
  }

  Student.prototype.getAge = function(){
    var ageDifMs = Date.now() - this.birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970); // 1970 is start time UTC
  
  }

  Student.prototype.getId = function(){
    return `${this.id}`
  }

  Student.prototype.getFirstName = function(){
    return `${this.first_name}`
  }

  Student.prototype.getLastName = function(){
    return `${this.last_name}`
  }

  Student.getFemale = function(){
    return Student.findAll({where:{gender:'female'},raw:true})
  }

  return Student;

};

// var murid = new Student()



