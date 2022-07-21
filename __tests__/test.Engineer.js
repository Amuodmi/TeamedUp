const Engineer = require('../lib/Engineer');

//tests getGitHub() 
test('gets github username', () => {
    const engineer = new Engineer('Rand', '1002', 'Rand@work.com', 'GitRandy');

    expect(engineer.getGitHub()).toEqual(expect.any(String));
});

//tests getPosition()
test('gets an engineer position', () => {
    const engineer = new Engineer('Rand', '1002', 'Rand@work.com');

    expect(engineer.getPosition()).toBe(("Engineer"));
});