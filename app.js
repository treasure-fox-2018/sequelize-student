

let Model = require('./models')

//INSTANCE//
Model.Student.findAll()
    // console.log(Student.findALL({ where: { first_name: first_name, last_name: last_name } }))
    //then can be put in the index.js
    .then(dataStudents => {

        dataStudents.forEach(student => {
            console.log(student.findFullName());
            console.log(student.getAge())
            // console.log(student.findByGender())
        })

        // dataStudents.forEach(fullname =>
        //     console.log(fullname.findFullName()))
    })
    .catch(err => {

        console.log(err)
    })

//CLASS//
// static femaleStudents(){


Model.Student.findByGender('female', (studentGender) => {
    // console.log(student)

    console.log(studentGender)
    // console.log(studentGender)
    // console.log(studentGender.last_name)
    // console.log(studentGender.full_name)
})







