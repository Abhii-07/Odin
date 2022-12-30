function reverseString(string) {
  const emptyArr = [];
  for (let i = string.length; i > 0; i--) {
    emptyArr.push(string.charAt(i - 1));
  }
  return emptyArr.join("");
}

module.exports = reverseString;
