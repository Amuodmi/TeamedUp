const Employee = require("../lib/employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }


//adding information that wasn't able to be inherited from other classes
getOfficeNumber = function(){
    return this.officeNumber; 
};
getPosition = function(){
    return "Manager";
}
};

module.exports = Manager; 