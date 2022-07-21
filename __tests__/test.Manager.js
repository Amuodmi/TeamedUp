const Manager = require("../lib/Manager")

//tests getOfficeNumber() 
test('gets office number', () => {
    const manager = new Manager('Moiraine', '1000', 'BlueAjahForLife@work.com', '01');

    expect(manager.getOfficeNumber()).toBe("01");
});

//tests getPosition()
test('gets a manager position', () => {
    const manager = new Manager('Moiraine', '1000', 'BlueAjahForLife@work.com');

    expect(manager.getPosition()).toBe(("Manager"));
});