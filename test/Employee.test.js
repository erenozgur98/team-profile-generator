// Starter file provided by Instructor (03/09/2021) AC

const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const emp = new Employee();
    expect(emp instanceof Employee).toEqual(true);
});

test("Can set name via constructor arguments", () => {
    const name = 'name';
    const emp = new Employee(name);

    expect(emp instanceof Employee).toEqual(true);
});

test("Can set id via constructor argument", () => {
    const id = 1;
    const emp = new Employee(id);

    expect(emp instanceof Employee).toEqual(true);
});

test("Can set email via constructor argument", () => {
    const email = 'email@email.com';
    const emp = new Employee(email);

    expect(emp instanceof Employee).toEqual(true);
});

test("Can get name via getName()", () => {
    const name = 'name';
    const emp = new Employee(name);
    const newName = emp.getName();

    expect(newName).toEqual(name);
});

test("Can get id via getId()", () => {
    const id = 1;
    const emp = new Employee('test', 1, id);
    const newId = emp.getId();

    expect(newId).toEqual(id);
});

test("Can get email via getEmail()", () => {
    const email = 'email@email.com';
    const emp = new Employee('test', 1, email);
    const newEmail = emp.getEmail();

    expect(newEmail).toEqual(email);
});

test("getRole() should return \"Employee\"", () => {
    const role = 'Employee';
    const emp = new Employee('Employee', 1, 'email@email.com', role);
    const getRole = emp.getRole();

    expect(getRole).toEqual(role);
});