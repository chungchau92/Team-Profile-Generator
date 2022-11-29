const inquirer = require("inquirer");

const Manager = require("../lib/manager");

const Engineer = require("../lib/engineer");

const Intern = require("../lib/intern");

const fs = require("fs")

// question to get manager's information
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

// question to get engineer's information
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
        choices : ['add an engineer','add an intern','finish']
    }
]

// question to get intern's information
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
        choices : ['add an engineer','add an intern','finish']
    }
]

class app {
    constructor() {
        this.List = []
    }
    
    async start() {
        const manager = await inquirer.prompt(managerQuestion)
        this.List.push(new Manager(manager.name,manager.id,manager.email,manager.officeNumber))
        var option = manager.option
        while( option !== "finish") {
            if(option === "add an engineer"){
                const engineer = await inquirer.prompt(engineerQuestion)
                this.List.push(new Engineer(engineer.name,engineer.id,engineer.email,engineer.gitHub))
                option = engineer.option
            } else if(option === "add an intern") {
                const intern = await inquirer.prompt(internQuestion)
                this.List.push(new Intern(intern.name,intern.id,intern.email,intern.school))
                option = intern.option
            }
        }
        this.createHTML()
        
    }
    createHTML() {
        const content =
        `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Team Profile</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        
        </head>
        <body>
            <header class="bg-danger text-center h-50">
                <h1 class="text-light py-5">My Team</h1>
            </header>
            <main class="h-75 " >
                <section class="d-flex justify-content-center flex-wrap p-4" style="width: 1200px ; margin: auto" >
                    ${this.createCard(this.List)}
                </section>
            </main>
        </body>
        </html>
        `
        fs.writeFileSync("./dist/teamProfile.html",content)
    }

    createCard(employees) {
        var result= ``
        employees.forEach(employee => {
            if(employee instanceof Manager) {
                result += `
                <div class="card shadow-lg m-3 " style="width: 18rem;">
                <div class="bg-primary text-white p-2">
                    <h4>${employee.name}</h3>
                    <h5>Manager</h4>
                </div>

                <div class="card-body my-3">
                    <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>ID: ${employee.name}</td>
                          </tr>
                          <tr>
                            <td>Email: <a href="${employee.email}">${employee.email}</a> </td>
                          </tr>
                          <tr>
                            <td>Office Number: ${employee.officeNumber}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
                `
            }
        })
        employees.forEach(employee => {
            if(employee instanceof Engineer) {
                result += `
                <div class="card shadow-lg m-3 " style="width: 18rem;">
                <div class="bg-primary text-white p-2">
                    <h4>${employee.name}</h3>
                    <h5>Manager</h4>
                </div>

                <div class="card-body my-3">
                    <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>ID: ${employee.name}</td>
                          </tr>
                          <tr>
                            <td>Email: <a href="${employee.email}">${employee.email}</a> </td>
                          </tr>
                          <tr>
                            <td>Office Number: ${employee.officeNumber}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
                `
            }
        })
        employees.forEach(employee => {
            if(employee instanceof Intern) {
                result += `
                <div class="card shadow-lg m-3 " style="width: 18rem;">
                <div class="bg-primary text-white p-2">
                    <h4>${employee.name}</h3>
                    <h5>Manager</h4>
                </div>

                <div class="card-body my-3">
                    <table class="table table-bordered">
                        <tbody>
                          <tr>
                            <td>ID: ${employee.name}</td>
                          </tr>
                          <tr>
                            <td>Email: <a href="${employee.email}">${employee.email}</a> </td>
                          </tr>
                          <tr>
                            <td>Office Number: ${employee.officeNumber}</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
                `
            }
        })
        return result
    }

    
}

module.exports = app