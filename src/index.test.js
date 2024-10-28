const capitalize = require("./index");

test("Captializes first letter", () => {
  expect(capitalize("gates")).toBe("Gates");
});

test("Captializes first letter", () => {
  expect(capitalize("board")).toBe("Board");
});
