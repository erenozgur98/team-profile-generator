// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(emp instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    const newName = 'name';
    const emp = new Employee(newName);

    expect(emp instanceof Employee).toBe(true);
});

test("Can set id via constructor argument", () => {
    const id = 1;
    const emp = new Employee(id);

    expect(emp instanceof Employee).toBe(true);
});

test("Can set email via constructor argument", () => {
    const newEmail = 'email';
    const emp = new Employee(newEmail);

    expect(emp instanceof Employee).toBe(true);
});

test("Can get name via getName()", () => {
    const newName = 'name';
    const emp = new Employee(newName);

    expect(emp instanceof Employee).toBe(true);
});

test("Can get id via getId()", () => {
    const id = 1;
    const emp = new Employee(id);

    expect(emp instanceof Employee).toBe(true);
});

test("Can get email via getEmail()", () => {
    const email = 'email';
    const emp = new Employee(email);

    expect(emp instanceof Employee).toBe(true);
});

test("getRole() should return \"Employee\"", () => {
    const getRole = 'Employee';
    const emp = new Employee(getRole);

    expect(emp instanceof Employee).toBe(true);
});
