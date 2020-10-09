const Scooter = require('./Scooter')

describe("scooter", () => {
    test("scooter is charged", () => {
        const scooter = new Scooter()
        expect(scooter.charge).toBe(true)
    })
})