const empQues = require("./utils/empQues");
const manaQues = require("./utils/manaQues");
const engQues = require("./utils/engQues.js");
const inteQues = require("./utils/inteQues");

const htmlCode = require('./htmlCode.js');

const inquirer = require("inquirer");
const fs = require("fs");


//Question that will prompt user to start: 
const startQuestions = [{
    type: "list",
    name: "member",
    message: "Choose the type of employee you are adding to your team:",
    choices: ["Manager", "Engineer", "Employee", "Intern"],

}];

//Question that will ask to see if they want to add more team members:
const Resume = [{
        type: 'confirm',
        name: 'confirmAbout',
        message: 'Would you like to enter another Team Member?',
        default: true

        
}];




// Function that will create team
async function createTeam(){
    return inquirer.prompt(startQuestions)
    .then((createMember) => {
      
      const generate = htmlCode.generateHTML(createMember);
  
      fs.writeFile('index.html', generate, (err) => {
        if (err) {
           console.log('Could not create file', err)
        } else {
           console.log('Success! New index.html file has been created')
        }
      });
  
    },
  
  )}



createTeam();