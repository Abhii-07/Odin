import { add, sub, multi, div } from "../scripts/calculator";

test("2 + 2 to equal 4", () => {
  expect(add(2, 2)).toEqual(4);
});

test("15 - 20 to equal -5", () => {
  expect(sub(15, 20)).toEqual(-5);
});

test("2 * 2 to equal 4", () => {
  expect(multi(2, 2)).toEqual(4);
});

test("4 / 4 to equal 1", () => {
  expect(div(4, 4)).toEqual(1);
});

test("2 / 0 to be Null", () => {
  expect(div(2, 0)).toBeNull();
});
