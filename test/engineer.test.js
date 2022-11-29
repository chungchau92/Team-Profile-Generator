const Engineer = require("../lib/engineer")

describe("Engineer Class", () => {
    it("compare Engineer name", () => {
        const engineer = new Engineer("aaaaaaaa",1,"aaaaaaa.com","aaaaaaa")
        const result = engineer.name
        expect(result).toEqual("aaaaaaaa")
    })

    it("compare Engineer id", () => {
        const engineer = new Engineer("aaaaaaaa",1,"aaaaaaa.com","aaaaaaa")
        const result = engineer.id
        expect(result).toEqual(1)
    })

    it("compare Engineer email", () => {
        const engineer = new Engineer("aaaaaaaa",1,"aaaaaaa.com","aaaaaaa")
        const result = engineer.email
        expect(result).toEqual("aaaaaaa.com")
    })

    it("compare Engineer role", () => {
        const engineer = new Engineer("aaaaaaaa",1,"aaaaaaa.com","aaaaaaa")
        const result = engineer.getRole()
        expect(result).toEqual("Engineer")
    })

    it("compare Engineer Github username", () => {
        const engineer = new Engineer("aaaaaaaa",1,"aaaaaaa.com","aaaaaaa")
        const result = engineer.github
        expect(result).toEqual("aaaaaaa")
    })
})