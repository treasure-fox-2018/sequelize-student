// display here

class View {

    constructor () {

    }

    static displayHelp () {
        console.log(`node index findall`)
        console.log(`node index findid `)
        console.log(`node index getfullname `)
        console.log(`node index getage`)
        console.log(`node index getfemale`)
    }

    static displayFindAll (data) {
        console.log(data)
    }

    static displayFindId (data) {
        console.log(data)
    }

    static displayGetFullName (students) {
        console.log(students)
    }

    static displayGetAge (data) {
        console.log(data)
    }

    static displayGetFemale (data) {
        console.log(data)
    }
}

module.exports = View