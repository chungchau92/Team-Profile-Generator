const Employee = require("../lib/employee")

describe("Employee Class", () => {
    it("compare employee name", () => {
        const employee = new Employee("aaaaaaaa",1,"aaaaaaa.com")
        const result = employee.name
        expect(result).toEqual("aaaaaaaa")
    })

    it("compare employee id", () => {
        const employee = new Employee("aaaaaaaa",1,"aaaaaaa.com")
        const result = employee.id
        expect(result).toEqual(1)
    })

    it("compare employee email", () => {
        const employee = new Employee("aaaaaaaa",1,"aaaaaaa.com")
        const result = employee.email
        expect(result).toEqual("aaaaaaa.com")
    })

    it("compare employee role", () => {
        const employee = new Employee("aaaaaaaa",1,"aaaaaaa.com")
        const result = employee.getRole()
        expect(result).toEqual("Employee")
    })
})