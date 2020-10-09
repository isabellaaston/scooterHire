class ChargeStation {
    constructor(location) {
        this.location = location
        this.scooters = []
    }

    assignScooters(...scooters){
        this.scooters.push(scooters)
    }

    hireScooter(user){
        if (user.scooter.length === 0) {
            let firstFullScooter = this.scooters.find(this.scooters.scooter.charge === true)
            console.log(firstFullScooter)
            let fullScooter= this.scooters.splice(firstFullScooter, 1)
            user.scooter.push(fullScooter)
        } else {
            throw new Error("Must return scooter before hiring a new one")
        }
    }
    returnScooter(user){
        user.scooter[0].charge = false
        this.assignScooters(user.scooter.pop())
    }
}

module.exports = ChargeStation