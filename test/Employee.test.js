const Employee = require("../lib/Employee");

test("start new employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("sets name using constructors", () => {
  const name = "deven";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("sets ids using contructors", () => {
  const testValue = 37;
  const e = new Employee("test", testValue);
  expect(e.id).toBe(testValue);
});

test("sets email using constructor", () => {
  const testValue = "deven@gmail.com";
  const e = new Employee("test", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("gets name with getName()", () => {
  const testValue = "deven";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("gets id with getId()", () => {
  const testValue = 37;
  const e = new Employee("test", testValue);
  expect(e.getId()).toBe(testValue);
});

test("gets email with getEmail()", () => {
  const testValue = "deven@gmail.com";
  const e = new Employee("test", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test("getRole() returns \"Employee\"", () => {
  const testValue = "Employee";
  const e = new Employee("deven", 1, "deven@gmail.com");
  expect(e.getRole()).toBe(testValue);
});
