const Scooter = require('./Scooter')
const User = require('./User')

describe("user", () => {
    test("user has a name", () => {
        const user = new User("Isabella")
        expect(user.name).toBe("Isabella")
    })
    test("user can hire scooter", () => {
        const scooter = new Scooter()
        const user = new User("Isabella")
        user.hireScooter(scooter)
        expect(user.scooter).toContainEqual(scooter)
    })
    test("user can hire scooter until they return one", () => {
        const scooter1 = new Scooter()
        const scooter2 = new Scooter()
        const user = new User("Isabella")
        user.hireScooter(scooter1)
        expect(() => user.hireScooter(scooter2)).toThrowError("Must return scooter before you can hire a new one")
    })
})