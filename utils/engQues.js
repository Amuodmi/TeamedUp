const engQues  = [
    {
        type: "input",
        name: "engineerName",
        message: "What will the preferred name of the Engineer be?",
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
        name: "engineerID",
        message: "What will the Engineers ID number be?"
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "What is the Engineers email?"
    },
    {
        type: "input",
        name: "engineerGithub",
        message: "What is the Engineers Github username?"
    }
];

module.exports = engQues;