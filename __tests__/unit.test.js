// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2

// isPhoneNumberTests
test("testing '(123)-456-7890' to be valid phone number", () => {
  expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});

test("testing '123-456-7890' to be valid phone number", () => {
  expect(functions.isPhoneNumber("(123)-456-7890")).toBe(true);
});

test("testing '(123)-456' to be invalid phone number", () => {
  expect(functions.isPhoneNumber("(123)-456")).toBe(false);
});

test("testing '(123)-456-78901' to be invalid phone number", () => {
  expect(functions.isPhoneNumber("(123)")).toBe(false);
});

// isEmail tests
test("testing 'johndoe@gmail.com' to be valid email", () => {
  expect(functions.isEmail("johndoe@gmail.com")).toBe(true);
});

test("testing 'johndoegmail.com' to be invalid email", () => {
  expect(functions.isEmail("johndoegmail.com")).toBe(false);
});

test("testing 'somebody123@hotmail.com' to be valid email", () => {
  expect(functions.isEmail("somebody123@hotmail.com")).toBe(true);
});

test("testing 'somebody123@hotmail' to be invalid email", () => {
  expect(functions.isEmail("somebody123@hotmail")).toBe(false);
});

// isStrongPassword tests
test("testing 'something_23' to be valid password", () => {
  expect(functions.isStrongPassword("something_23")).toBe(true);
});

test("testing 'password' to be valid password", () => {
  expect(functions.isStrongPassword("password")).toBe(true);
});

test("testing '!$%thing' to be invalid password", () => {
  expect(functions.isStrongPassword("!$%thing")).toBe(false);
});

test("testing 'rye' to be invalid password", () => {
  expect(functions.isStrongPassword("rye")).toBe(false);
});

// isDate tests
test("testing '1/2/2023' to be valid date", () => {
  expect(functions.isDate("1/2/2023")).toBe(true);
});

test("testing '01/02/2023' to be valid date", () => {
  expect(functions.isDate("1/2/2023")).toBe(true);
});

test("testing '1/2/23' to be invalid date", () => {
  expect(functions.isDate("1/2/23")).toBe(false);
});

test("testing 'january' to be invalid date", () => {
  expect(functions.isDate("january")).toBe(false);
});

// isHexColor tests
test("testing '#72473E' to be valid hex code", () => {
  expect(functions.isHexColor("#72473E")).toBe(true);
});

test("testing '#f0c' to be valid hex code", () => {
  expect(functions.isHexColor("#f0c")).toBe(true);
});

test("testing '#7247' to be invalid hex code", () => {
  expect(functions.isHexColor("#7247")).toBe(false);
});

test("testing '#%64*yf' to be invalid hex code", () => {
  expect(functions.isHexColor("#%64*yf")).toBe(false);
});
