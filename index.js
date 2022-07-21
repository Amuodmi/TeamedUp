const empQues = require("./utils/empQues");
const manaQues = require("./utils/manaQues");
const engQues = require("./utils/engQues.js");
const inteQues = require("./utils/inteQues");

const htmlCode = require('./htmlCode.js');

const inquirer = require("inquirer");
const fs = require("fs");

const members = []


//Question that will prompt user to start: 
function startQuestions() {

  console.log("Welcome to the TeamedUp employee generator program!");
  inquirer.prompt([
{
    type: "list",
    name: "member",
    message: "Choose the type of employee you are adding to your team:",
    choices: ["Manager", "Engineer", "Intern", "End"],

}
  ])
      .then((answers) => {
       //starts next question
        promptEmployeeType() });

        function promptEmployeeType(answers) {
          //if Intern was chosen, these prompts will begin:
          if (answers.employeeType === "Intern") {
              return inquirer
                  .prompt([
                      {
                          type: "input",
                          name: "internName",
                          message: "What is your intern's name? (Required)",
                          validate: internNameChoice => {
                              if (internNameChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter the Intern's name!");
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "internId",
                          message: "What will be your Intern's employee ID? (Required)",
                          validate: internIdChoice => {
                              if (internIdChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter your Intern's ID");
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "internEmail",
                          message: "What is your Intern's email address? (Required)",
                          validate: internEmailChoice => {
                              if (internEmailChoice) {
                                  return true;
                              } else {
                                  console.log('Please enter an email address for your Intern');
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "internSchool",
                          message: "What educational institution does your Intern attend? (Required)",
                          validate: internSchoolChoice => {
                              if (internSchoolChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter your Intern's school!");
                                  return false;
                              }
                          }
                      }
                  ])
                  .then((answers) => {
                      //captures data and stores it in a new Intern object
                      const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
                      //add new intern obj to the team array
                      team.push(intern);
                      //returns to menu
                      promptEmployeeType();
                  })
          }
          //if Engineer was selcted, these prompts will begin:
          if (answers.employeeType === "Engineer") {
              return inquirer
                  .prompt([
                      {
                          type: "input",
                          name: "engineerName",
                          message: "What is your Engineer's name? (Required)",
                          validate: engineerNameChoice => {
                              if (engineerNameChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter the Engineer's name!");
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "engineerId",
                          message: "What is your engineer's employee id? (Required)",
                          validate: engineerIdChoice => {
                              if (engineerIdChoice) {
                                  return true;
                              } else {
                                  console.log('Please enter the ID for the Engineer');
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "engineerEmail",
                          message: "What is your Engineer's email address? (Required)",
                          validate: engineerEmailChoice => {
                              if (engineerEmailChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter the Engineer's email!");
                                  return false;
                              }
                          }
                      },
                      {
                          type: "input",
                          name: "engineerGitHub",
                          message: "What is your engineer's GitHub account? (Required)",
                          validate: engineerGitHubChoice => {
                              if (engineerGitHubChoice) {
                                  return true;
                              } else {
                                  console.log("Please enter your Engineer's Github account!");
                                  return false;
                              }
                          }
                      }
                  ])
                  .then((answers) => {
                      const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
                      team.push(engineer);
                      promptEmployeeType();
                  })
          }

          //if Manager was selcted, these prompts will begin:
          if (answers.employeeType === "Manager") {
            return inquirer.prompt([
              {
                  type: "input",
                  name: "managerName",
                  message: "What is the Manager's name? (Required)",
                  validate: managerNameInput => {
                      if (managerNameInput) {
                          return true;
                      } else {
                          console.log("Please enter the Manager's name!");
                          return false;
                      }
                  }
              },
              {
                  type: "input",
                  name: "managerId",
                  message: "What will the Manager's employee ID be? (Required)",
                  validate: managerIdInput => {
                      if (managerIdInput) {
                          return true;
                      } else {
                          console.log('Please enter the employee id');
                          return false;
                      }
                  }
              },
              {
                  type: "input",
                  name: "managerEmail",
                  message: "What is the Manager's email? (Required)",
                  validate: managerEmailInput => {
                      if (managerEmailInput) {
                          return true;
                      } else {
                          console.log("Please enter the Manager's email address");
                          return false;
                      }
                  }
              },
              {
                  type: "input",
                  name: "managerOfficeNumber",
                  message: "What will the Managers office number be? (Required)",
                  validate: managerOfficeNumberChoice => {
                      if (managerOfficeNumberChoice) {
                          return true;
                      } else {
                          console.log("Please enter the Manager's office number");
                          return false;
                      }
                  }
              }
          ])
          .then((answers) => {
              const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
              team.push(manager);
              promptEmployee();
          })      
      }
////////////////////////////////////////  
 else {



//if END was selcted the webpage will generate:
// Function that will create team
// async function createTeam(){
//     return inquirer.prompt(startQuestions)
//     .then((createMember) => {
      
//       const generate = htmlCode.generateHTML(createMember);
  

        console.log("Webpage generated! Please see the index.html file in the dist folder to review your team.")
      fs.writeFile('index.html', generate, (err) => {
        if (err) {
           console.log('Could not create file', err)
        } else {
           console.log('Success! New index.html file has been created')
        }
      });
      fs.copyFile('./src/style.css', './dist/style.css', err => {
        // if there's an error
        if (err) throw err;
    });
    }
  
  };



startQuestions();