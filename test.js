// const fs = require('fs')

// const studentFile = fs.readFileSync(__dirname + '/./student.csv', "utf8")

// const students = studentFile.split('\n')

// const student = students.reduce((result, datas)=>{
//     if(datas != ''){
//         let data = datas.split(',')
//         result.push({
//             first_name : data[1],
//             last_name : data[2],
//             gender : data[3],
//             birthday : data[4],
//             email : data[5],
//             phone : data[6]
//         }) 
//     }
//     return result
// },[])

// console.log(student)



let regex = RegExp(/[0-9]{10}/)

let values = '0822810792138120323' 
console.log(regex.test(values))
// if(regex.test(values)){
//     console.log('truee')
// }else{
//     console.log('phone is wrong')
// }