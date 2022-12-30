import caesarCipher from "../scripts/caesarCipher";

test("Example 1", () => {
  expect(caesarCipher("abc", 1)).toMatch(/bcd/);
});

test("Example 2", () => {
  expect(caesarCipher("abcdezz", 3)).toMatch(/defghcc/);
});

test("Example 3", () => {
  expect(caesarCipher("", 1)).toMatch(/^$/);
});

test("Example 4", () => {
  expect(caesarCipher("Antarctica", 20)).toMatch(/uhnulwncwu/);
});

test("Example 5", () => {
  expect(caesarCipher("Fifth.test", 25)).toBe("ehesg.sdrs");
});

test("Example 6", () => {
  expect(caesarCipher("One MOre Test...", 5)).toBe("tsj rtwj yjxy...");
});

test("Example 7", () => {
  expect(caesarCipher("a1ab#bc c", 1)).toBe("b1bc#cd d");
});

test("Example 8", () => {
  expect(caesarCipher(12, 1)).toBe("not a string");
});
