'use strict';
const fs = require('fs')

const studentFile = fs.readFileSync(__dirname + '/../student.csv', "utf8")

const students = studentFile.split('\n')

const arrStudents = students.reduce((result, datas)=>{
    if(datas != ''){
        let data = datas.split(',')
        result.push({
            first_name : data[1],
            last_name : data[2],
            gender : data[3],
            birthday : data[4],
            email : data[5],
            phone : data[6]
        }) 
    }
    return result
},[])


module.exports = {
  up: (queryInterface, Sequelize) => {
   return queryInterface.bulkInsert('Students', arrStudents, {})
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Students', null, {})
  }
};
