const Employee = require('../lib/Employee');

//tests getName() 
test('tests an employee name', () => {
    const employee = new Employee('Jimin', '1001', 'Jimin@work.com');

    expect(employee.getName()).toBe('Jimin');
});

//tests getId() 
test('tests the employee id', () => {
    const employee = new Employee('Jimin', '1001', 'Jimin@work.com');

    expect(employee.getId()).toBe('1001');
});

//tests the functionality of getEmail() 
test('gets an employee email', () => {
    const employee = new Employee('Jimin', '1001', 'Jimin@work.com');

    expect(employee.getEmail()).toBe('Jimin@work.com');
});

//tests getPosition()
test('gets an employee position', () => {
    const employee = new Employee('Jimin', '1001', 'Jimin@work.com');

    expect(employee.getPosition()).toBe(("Employee"));
});