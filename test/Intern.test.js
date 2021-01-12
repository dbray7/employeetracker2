const Intern = require("../lib/Intern");

test("sets school with constructor", () => {
  const testValue = "CWRU";
  const e = new Intern("Deven", 1, "deven@gmail.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() returns \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("deven", 1, "deven@gmail.com", "CWRU");
  expect(e.getRole()).toBe(testValue);
});

test("uses getSchool() to get school", () => {
  const testValue = "CWRU";
  const e = new Intern("deven", 1, "deven@gmail.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});
