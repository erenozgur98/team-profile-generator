// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
let employee = [];


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

const manager = () => {
    inquirer    
        .prompt([
            {
                type:'input',
                message:"What is the Manager's name?",
                name: 'name'
            },
            {
               type:'input',
               message:"What is the Manager's ID no?",
               name:'id' 
            },
            {
                type:'input',
                message:"What is Manager's email address?",
                name:'email'
            },
            {
                type:'input',
                message:"What is Manager's office phone number?",
                name:'officeNumber'
            },
            {
                type: 'list',
                message:"Would you like to add new Employee?",
                name: 'newEmployee',
                choices: ['Yes', 'No']
            }
        ])
        .then((response => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNumber)

            employee.push(manager);
            console.log(employee);

            console.log(employee);
            if(response.newEmployee === 'Yes'){
                start()
            } else {
                fs.writeFile(outputPath, render(employee), (err) => {
                    if(err) throw err;
                    console.log('Your HTML has been created!');
                });
                return;
            }
        }));
}


const start = () => {
inquirer
    .prompt([
        {
            type: 'list',
            message: "What is the new Employee's role?",
            name: 'role',
            choices: ['Engineer', 'Intern']
        }
    ])
    .then((response => {
        if (response.role === 'Engineer') {
            engineerQuestions();
        } else if (response.role === 'Intern') {
            internQuestions();
        } else {
            return;
        }
    }))
}


const engineerQuestions = () => {
    inquirer
        .prompt([            
            {
                type:'input',
                message:"What is new the Engineer's name?",
                name: 'name'
            },
            {
               type:'input',
               message:"What is the Engineer's ID no?",
               name:'id' 
            },
            {
                type:'input',
                message:"What is Engineer's email address?",
                name:'email'
            },
            {
                type:'input',
                message:"What is Engineer's GitHub username?",
                name:'gitHub'
            },
            {
                type: 'list',
                message:"Would you like to add another Employee?",
                name: 'newEmployee',
                choices: ['Yes', 'No']
            }
        ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.gitHub);

            employee.push(engineer);
            console.log(employee);

            if(response.newEmployee === 'Yes'){
                start()
            } else {
                fs.writeFile(outputPath, render(employee), (err) => {
                    if(err) throw err;
                    console.log('Your HTML has been created!');
                });
                return;
            }
        })
}

const internQuestions = () => {
    inquirer
        .prompt([            
            {
                type:'input',
                message:"What is the new Intern's name?",
                name: 'name'
            },
            {
               type:'input',
               message:"What is the Intern's ID no?",
               name:'id' 
            },
            {
                type:'input',
                message:"What is Intern's email address?",
                name:'email'
            },
            {
                type:'input',
                message:"Which school did Intern attend to?",
                name:'school'
            },
            {
                type: 'list',
                message:"Would you like to add another Employee?",
                name: 'newEmployee',
                choices: ['Yes', 'No']
            }
        ])
        .then((response) => {
            const intern = new Intern(response.name, response.id, response.email, response.school);

            employee.push(intern);
            console.log(employee);

            if(response.newEmployee === 'Yes'){
                start()
            } else {
                fs.writeFile(outputPath, render(employee), (err) => {
                    if(err) throw err;
                    console.log('Your HTML has been created!');
                });
                return;
            }
        })
}

manager();





// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
