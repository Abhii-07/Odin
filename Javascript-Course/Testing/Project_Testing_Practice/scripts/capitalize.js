function capitalize(string) {
  const fistLetter = string.charAt(0).toUpperCase();
  const remaining = string.substr(1).toLowerCase();
  const result = fistLetter.concat(remaining);
  return result;
}

module.exports = capitalize;
