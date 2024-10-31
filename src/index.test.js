const { experiments } = require("webpack");
const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
} = require("./index");

test("Captializes first letter", () => {
  expect(capitalize("gates")).toBe("Gates");
});

test("Captializes first letter", () => {
  expect(capitalize("board")).toBe("Board");
});

test("Captializes first letter", () => {
  expect(capitalize("BoarD")).toBe("BoarD");
});

test("Reverses a string", () => {
  expect(reverseString("apple")).toBe("elppa");
});

test("Calculates sum", () => {
  expect(calculator.add(5, 3)).toBe(8);
});

test("Calculates difference", () => {
  expect(calculator.subtract(5, 3)).toBe(2);
});

test("Calculates quotient", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});

test("Calculates product", () => {
  expect(calculator.multiply(5, 3)).toBe(15);
});

test("Generates Caesar Cipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("Generates Caesar Cipher", () => {
  expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("Generates Caesar Cipher", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});
