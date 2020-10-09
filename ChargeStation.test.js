const Scooter = require('./Scooter')
const User = require('./User')
const ChargeStation = require('./ChargeStation')

describe("charge station", () => {
    test("charge sttaion has a location", () => {
        const chargeStation = new ChargeStation("Marble Arch")
        expect(chargeStation.location).toBe("Marble Arch")
    })
})