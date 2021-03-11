// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = 'school';
    const result = new Intern(school);

    expect(result instanceof Intern).toBe(true);
});

test("getRole() should return \"Intern\"", () => {
    const intern = 'Intern';
    const result = new Intern('test', 1, intern);
    const newIntern = result.getRole();

    expect(newIntern).toEqual(intern);
});

test("Can get school via getSchool()", () => {
    const school = 'school';
    const result = new Intern('test', 1, 'email@email.com', school);
    const newSchool = result.getSchool();

    expect(newSchool).toEqual(school);
});
