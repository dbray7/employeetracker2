const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("sets office number with constructor", () => {
  const testValue = 20;
  const e = new Manager("Brad", 1, "Brad@gmail.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() returns "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Brad", 1, "Brad@gmail.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("gets office number with getOfficeNumber()", () => {
  const testValue = 20;
  const e = new Manager("Brad", 1, "Brad@gmail.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
