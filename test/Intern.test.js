// Starter file provided by Instructor (03/09/2021) AC

const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const school = 'school';
    const result = new Intern(school);

    expect(result instanceof Intern).toBe(true);
});

test("getRole() should return \"Intern\"", () => {
    const intern = 'Intern';
    const result = new Intern(intern);

    expect(result instanceof Intern).toBe(true);
});

test("Can get school via getSchool()", () => {
    const school = 'school';
    const result = new Intern(school);

    expect(result instanceof Intern).toBe(true);
});
