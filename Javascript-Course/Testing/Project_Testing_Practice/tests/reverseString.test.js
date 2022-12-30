const reverseString = require("../scripts/reverseString");

test("Example 1", () => {
  expect(reverseString("house")).toMatch(/esuoh/);
});

test("Example 2", () => {
  expect(reverseString("the house")).toMatch(/esuoh eht/);
});

test("Example 3", () => {
  expect(reverseString(" hOuSe")).toMatch(/eSuOh /);
});

test("Example 4", () => {
  expect(reverseString("")).toMatch(/^$/);
});
