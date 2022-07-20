const manaQues = [
    {
        type: "input",
        name: "managerName",
        message: "What is the managers preferred name?",
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
        name: "managerID",
        message: "What is the managers ID number?"
    },
    {
        type: "input",
        name: "managerEmail",
        message: "What is the managers email address?"
    },
    {
        type: "input",
        name: "office",
        message: "What is the managers office number?"
    }
];

module.exports = manaQues;