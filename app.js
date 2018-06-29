

let Model = require('./models')

//INSTANCE//

Model.Student.create({
    first_name: 'ade',
    last_name: 'fahri',
    gender: 'male',
    birthday: '200',
    email:'Naoer@hotmail.com',
    phone: 242,
    createdAt: new Date(),
    updatedAt: new Date(),
    height:160,
})
    .then(data => {
        // let value = data.get({ plain: true })
        console.log(data)
    })
    .catch(err => {
        console.log(err)
    })


/



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


Model.Student.findByGender('female', (studentGenders) => {
    // console.log(student)
    studentGenders.forEach(studentGender => {
        let fullName=`${studentGender.first_name} ${studentGender.last_name}`
        console.log(studentGender.id)
        console.log(studentGender.first_name)
        console.log(studentGender.last_name)
        // console.log(studentGender.i)
        console.log(fullName)



    })
    // console.log(studentGender)
    // console.log(studentGender.last_name)
    // console.log(studentGender.full_name)
})







