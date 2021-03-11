// Starter file provided by Instructor (03/09/2021) AC

const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Can set office number via constructor argument", () => {
    const officeNumber = 'number';
    const result = new Manager(officeNumber);

    expect(result instanceof Manager).toBe(true);
});

test('getRole() should return "Manager"', () => {
    const manager = 'Manager';
    const result = new Manager('test', 1, 'email@email.com', manager);
    const newManager = result.getRole();

    expect(newManager).toEqual(manager);
});

test("Can get office number via getOffice()", () => {
    const number = 'officeNumber';
    const result = new Manager('test', 1, 'email@email.com', number);
    const newNumber = result.getOfficeNumber();

    expect(newNumber).toEqual(number);
});
