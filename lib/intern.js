const Employee = require("../lib/employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
};


Intern.prototype.getSchool = function(){
    return this.school;
};

Intern.prototype.getPosition = function(){
    return "Intern"
};

module.exports = Intern; 