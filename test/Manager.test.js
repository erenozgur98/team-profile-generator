// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = 'number';
    const result = new Manager(officeNumber);

    expect(result instanceof Manager).toBe(true);
});

test('getRole() should return "Manager"', () => {
    const newManager = 'manager';
    const result = new Manager(newManager);

    expect(result instanceof Manager).toBe(true);
});

test("Can get office number via getOffice()", () => {
    const newNumber = 'number';
    const result = new Manager(newNumber);

    expect(result instanceof Manager).toBe(true);
});
