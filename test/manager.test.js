const Manager = require("../lib/manager")

describe("Manager Class", () => {
    it("compare manager name", () => {
        const manager = new Manager("aaaaaaaa",1,"aaaaaaa.com",1)
        const result = manager.name
        expect(result).toEqual("aaaaaaaa")
    })

    it("compare manager id", () => {
        const manager = new Manager("aaaaaaaa",1,"aaaaaaa.com",1)
        const result = manager.id
        expect(result).toEqual(1)
    })

    it("compare manager email", () => {
        const manager = new Manager("aaaaaaaa",1,"aaaaaaa.com",1)
        const result = manager.email
        expect(result).toEqual("aaaaaaa.com")
    })

    it("compare manager role", () => {
        const manager = new Manager("aaaaaaaa",1,"aaaaaaa.com",1)
        const result = manager.getRole()
        expect(result).toEqual("Manager")
    })

    it("compare manager officeNumber", () => {
        const manager = new Manager("aaaaaaaa",1,"aaaaaaa.com",1)
        const result = manager.officeNumber
        expect(result).toEqual(1)
    })
})