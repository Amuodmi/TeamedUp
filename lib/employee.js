class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
 }
};


//using Prototype as found in 10.2.7 (creates method on the constructor, inherits method)
Employee.prototype.getName = function(){
    return this.name;
};

Employee.prototype.getId = function(){
    return this.id;
};

Employee.prototype.getEmail = function(){
    return this.email;
};

module.exports = Employee;