// working for brighter future (this table future...)

const View = require('./view.js')
let model = require('./models')

class Controller {

    constructor () {

    }

    static undefined () {
        View.displayHelp ()
    }

    static findAll () {
        model.Student.findAll().then(students => {
            students.forEach(data => {
                View.displayFindAll(data.toJSON())
            });
        })
    }

    static findId (num) {
        model.Student.findAll({
            where : { 
                id : num
            }
        }).then(data => {
            View.displayFindId(data[0].toJSON())
        })
    }

    static getFullName () {
    
        model.Student.findAll({}).then(students => {
            students.forEach(data => {
                 View.displayGetFullName(data.getFullName())
            })
        })
    }

    static getAge () {
        model.Student.findAll({}).then(students => {
            students.forEach(data => {
                View.displayGetAge(data.getAge())
            })
        })
    }

    static getFemale () {
        model.Student.getFemale({}).then(students => {
            students.forEach(data => {
                console.log(data.id)
                console.log(data.firstName)
                console.log(data.lastName)
                console.log(data.getFullName())
            })
        })
    }
}

module.exports = Controller

