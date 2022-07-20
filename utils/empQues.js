const empQues = [
    {
        type: "input",
        name: "employeeName",
        message: "What is the employee's preferred name?",
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
        name: "employeeID",
        message: "What is the employee's ID number?"
    },
    {
        type: "input",
        name: "employeeEmail",
        message: "What is the employee's email?"
    }
];

module.exports = empQues;