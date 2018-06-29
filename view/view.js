const Table = require('cli-table')
const chalk = require('chalk')

class View {
  static messageInfo (fullName) {
    console.log(fullName);
  }

  static messageErr (dataErr) {
    console.log(dataErr);
  }

  static femaleStudent (data) {
    data.forEach(dataFemale => {
      console.log("====================================");
      
      console.log(dataFemale.first_name);
      console.log(dataFemale.last_name);
      console.log(dataFemale.getFullName());
      
      console.log("====================================");
    })
  }
  
}

module.exports = View