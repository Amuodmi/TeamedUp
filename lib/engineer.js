const Employee = require("../lib/employee");

//section 10.5.6 extending inherits from employee class. Super is getting extra properties from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }


//inherits method from constructor 
getGithub() {
    return this.github;
}

getPosition() {
    return "Engineer"
}};

module.exports = Engineer;