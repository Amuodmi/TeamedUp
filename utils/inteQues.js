const inteQues = [
    {
        type: "input",
        name: "internName",
        message: "What is the Interns preferred name?",
        validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('Please enter a name!');
              return false;
            }
          }
    },
    {
        type: "input",
        name: "internID", 
        message: "What is the Interns ID number?"
    },
    {
        type: "input",
        name: "internEmail", 
        message: "What is the Interns email address?"
    },
    {
        type: "input",
        name: "school",
        message: "Which school does the Intern attend?"
    }
];

module.exports = inteQues;