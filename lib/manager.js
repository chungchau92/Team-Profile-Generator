const Employee = require("../lib/employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getOfficeNumber() {
        this.officeNumber
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager