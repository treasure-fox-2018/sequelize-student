const model = require("./models")

model.student.findAll()
    .then(studentData => {
        studentData.forEach(student => {
            console.log(student.getFullName())
            console.log(student.getAge());
        })
    })
    .catch(err => {
        console.log(err)
    })

model.student.findGender('female',(studentGender)=>{
    // console.log(studentGender)
    let name = `${studentGender.first_Name} ${studentGender.last_name}`
    console.log(studentGender.id)
    console.log(studentGender.first_Name)
    console.log(studentGender.last_name)
    console.log(name)
})

model.student.create({
    first_Name: 'cim',
    last_name: 'ming',
    gender: 'male',
    bithday: '28',
    email:'cimz@ymail.com',
    phone:'212',
    createAt: new Date(),
    updateAt: new Date(),
    height:'169 cm'
})
    .then(data =>{
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })

