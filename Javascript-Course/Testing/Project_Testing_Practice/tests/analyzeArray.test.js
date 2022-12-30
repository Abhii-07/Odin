import analyzeArray from "../scripts/analyzeArray";

test("Example 1: Just numbers", () => {
  const object = analyzeArray([1, 8, 3, 4, 2, 6]);
  expect(object).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("Example 2: With a string", () => {
  const object = analyzeArray([1, 8, 3, 4, "2", 6]);
  expect(object).toEqual("All elements of the array must be numbers");
});

test("Example 3: Non-array", () => {
  const object = analyzeArray(123);
  expect(object).toEqual("This is not an Array");
});
