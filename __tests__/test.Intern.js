const Intern = require('../lib/Intern');

//tests getSchool() 
test('gets school', () => {
    const intern = new Intern('Perrin', '1003', 'Perrin@work.com', 'Two-Rivers University ');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

//tests getPosition()
test('gets an intern position', () => {
    const intern = new Intern('Perrin', '1003', 'Perrin@work.com');

    expect(intern.getPosition()).toBe(("Intern"));
});