const Model = require('./models');
const command = process.argv[2]

const add = (inputObj)=>{
    Model.Student.create(inputObj).then(() => {
        // if(err){
        //     console.log(err.message)
        // } else {
        //     console.log(result)
        // }
        // console.log (student.get({plain: true}))
    })
}

const showAll = () => {
    Model.Student.findAll().then(students =>{
        console.log(students)
    })
}

const showAllFemale = () => {
    Model.Student.getFemaleStudents(femaleStudents => {
        femaleStudents.forEach(student => {
            console.log(student.id)
            console.log(student.first_name)
            console.log(student.last_name)
            console.log(student.getFullName())
            console.log(student.getAge())
        })
    })
}

// showAllFemale()

add({"first_name":"Janela","last_name":"Lambal","gender":"Female","birthday":"1974-09-28","email":"jlambaal0@java.com","phone":"4598648963"})

