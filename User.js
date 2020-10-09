class User {
    constructor(name) {
        this.name = name
        this.scooter = []
    }
    hireScooter(scooter){
        if (this.scooter.length = 0) {
            this.scooter.push(scooter)
        } else {
            throw new Error("Must return scooter before you can hire a new one")
        }
    }
}

module.exports = User