const capitalize = require("../scripts/capitalize");

test("Example 1", () => {
  expect(capitalize("house")).toMatch(/House/);
});

test("Example 2", () => {
  expect(capitalize("the house")).toMatch(/The house/);
});

test("Example 1", () => {
  expect(capitalize("hOuSe")).toMatch(/House/);
});

test("Example 1", () => {
  expect(capitalize("")).toMatch(/^$/);
});
