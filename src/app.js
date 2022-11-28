const inquirer = require("inquirer")

const managerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "enter manager's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "enter manager's id"
    },
    {
        type: 'input',
        name: 'email',
        message: "enter manager's email"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "enter manager's office number"
    },
    {
        type: 'list',
        name: 'option',
        message: 'add an engineer or an intern or to finish building a team',
        choices : ['add an engineer','add an intern','finish']
    }
]

const engineerQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "enter engineer's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "enter engineer's id"
    },
    {
        type: 'input',
        name: 'email',
        message: "enter engineer's email"
    },
    {
        type: 'input',
        name: 'gitHub',
        message: "enter GitHub username"
    },
    {
        type: 'list',
        name: 'option',
        message: 'add an engineer or an intern or to finish building a team',
        choices : [' add an engineer','add an intern','finish']
    }
]

const internQuestion = [
    {
        type: 'input',
        name: 'name',
        message: "enter intern's name"
    },
    {
        type: 'input',
        name: 'id',
        message: "enter intern's id"
    },
    {
        type: 'input',
        name: 'email',
        message: "enter intern's email"
    },
    {
        type: 'input',
        name: 'school',
        message: "enter intern's school"
    },
    {
        type: 'list',
        name: 'option',
        message: 'add an engineer or an intern or to finish building a team',
        choices : [' add an engineer','add an intern','finish']
    }
]

class app {
    constructor() {
        this.List = []
    }
    
    start() {
        
    }
}

module.exports = app