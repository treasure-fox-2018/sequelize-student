class View{
    static viewAll(students){
        students.forEach(element => {
            console.log(element.toJSON())
        });
    }

    static viewError(err){
        console.error(err)
    }
}

module.exports = View