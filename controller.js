const model = require("./models")
const StudentModel = model.Student
const View = require("./view.js")

class Controller{

    static addData(param){
        let first_name = param[0]
        let last_name = param[1]
        let gender = param[2]
        let birthday = param[3]
        let email = param[4]
        let phone = param[5]
        let height = param[6]
        let objStudent = {
            first_name : first_name,
            last_name : last_name,
            gender : gender,
            birthday : birthday,
            email : email,
            phone : phone,
            createdAt : new Date(),
            updatedAt : new Date(),
            height : height
        }
        StudentModel.create(objStudent)
        .then(function(student){
            View.display(student.get({plain : true}))
        })
        .catch(function(err){
            View.display(err.message)
        })
    }





    static showData(){
        // console.log(StudentModel)

        StudentModel.showData()
        .then(function(data){
            data.forEach(function(student){
                // View.display(student.get({plain : true}))
                // StudentModel.fullName()
                let name = student.getFullName()
                View.display(name)
            })
            
        })
    }

    static getAge(id){
        StudentModel.findById(id)
        .then(function(data){
            let ageStudent = data.getFullName() +" age: "+ data.getAge()
            View.display(ageStudent)
        })
        .catch(function(err){
            View.display(err)
        })
    }

    static getFemale(){
        StudentModel.getFemale()
        .then(function(allFemale){
            allFemale.forEach(function(dataFemale){
                View.display(dataFemale.get({plain : true}))
            })
        })
    }
}

module.exports = Controller