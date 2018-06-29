// input here

const argv = process.argv.slice(2)
const Controller = require('./controller.js')

class Input {

    constructor () {

    }

    static retrieveCommand (argv) {

        if(argv[0] === undefined) {
            Controller.undefined()
        }

        if(argv[0] === 'findall') {
            Controller.findAll()
        }

        if(argv[0] === 'findid') {
            Controller.findId(argv[1])
        }

        if(argv[0] === 'getfullname') {
            Controller.getFullName()
        }   

        if(argv[0] === 'getage') {
            Controller.getAge()
        }

        if(argv[0] === 'getfemale') {
            Controller.getFemale()
        }
    }
}

Input.retrieveCommand(argv)