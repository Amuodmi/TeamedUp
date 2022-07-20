const Employee = require("../lib/employee");

//section 10.5.6 extending inherits from other class. Super is getting extra properties from Employee (this.)
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github
    }
};

//inherits method from constructor 
Engineer.prototype.getGithub = function(){
    return this.github;
};

Engineer.prototype.getPosition = function(){
    return "Engineer"
};

module.exports = Engineer;