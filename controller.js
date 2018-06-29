
const Model = require('./models');

class Controller {
  static findFullName(id){
    Model.student.prototype.getFullName(id)
      .then((dataStudent) =>{
        console.log(`${dataStudent.first_name} ${dataStudent.last_name}`);
      })
      .catch((err) =>{
        console.log('Data tidak ditemukan');
      })
  }

  static findAge(id){
    Model.student.prototype.getAge(id)
      .then((dataAge) =>{
        // let resultAge = dataAge.findOne({where: {id:id},raw:true})
        let age = Date.now() - dataAge.birthday.getTime();
        let resultAge = new Date(age);
        console.log(Math.abs(resultAge.getUTCFullYear() - 1970));
        // console.log(dataAge);
      })
      .catch((err) =>{
        console.log('Data tidak ditemukan');
      })
  }

  static findFemaleStudent(){
    Model.student.getFemaleStudent()
      .then((dataFemale) =>{
        for (var i in dataFemale) {
          console.log(`${dataFemale[i].id}`);
          console.log(`${dataFemale[i].first_name}`);
          console.log(`${dataFemale[i].last_name}`);
          console.log(`${dataFemale[i].first_name} ${dataFemale[i].last_name}`);
        }
        // dataFemale.forEach(dataFemale =>{
        //   console.log(`${dataFemale[i].first_name} ${dataFemale[i].last_name}`);
        // })
      })
      .catch((err) =>{
        console.log('Data tidal ditemukan')
      })
  }
}


module.exports = Controller;
