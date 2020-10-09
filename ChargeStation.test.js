const Scooter = require('./Scooter')
const User = require('./User')
const ChargeStation = require('./ChargeStation')

describe("charge station", () => {
    test("charge sation has a location", () => {
        const chargeStation = new ChargeStation("Marble Arch")
        expect(chargeStation.location).toBe("Marble Arch")
    })
    test("user can hire scooter", () => {
        const chargeStation = new ChargeStation("Arnos Grove")
        const scooter1 = new Scooter()
        const scooter2 = new Scooter()
        const scooter3 = new Scooter()
        chargeStation.assignScooters(scooter1, scooter2, scooter3)
        const user = new User("Isabella")
        chargeStation.hireScooter(user)       
        expect(user.scooter).toContainEqual(scooter)
    })
    // test("user can't hire scooter until they return one", () => {
    //     const chargeStation = new ChargeStation("Arnos Grove")

    //     const scooter1 = new Scooter()
    //     const scooter2 = new Scooter()
    //     const user = new User("Isabella")
    //     chargeStation.hireScooter(scooter1)
    //     expect(() => chargeStation.hireScooter(scooter2)).toThrowError("Must return scooter before hiring a new one")
    // })
    // test("", () => {
    //     const chargeStation = new ChargeStation("Arnos Grove")
    //     const scooter1 = new Scooter()
    //     chargeStation.assignScooters(scooter1, scooter2, scooter3)
    //     const user = new User("Isabella")
    //     user.scooter.push(scooter1)
    // })
})