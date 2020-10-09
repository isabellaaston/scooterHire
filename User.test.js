const Scooter = require('./Scooter')
const User = require('./User')

describe("user", () => {
    test("user has a name", () => {
        const user = new User("Isabella")
        expect(user.name).toBe("Isabella")
    })
})