const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function caesarCipher(string, n, cipherText = []) {
  if (typeof string !== "string") return "not a string"; // Checks if it's a string
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    const alphaIndex = alphabet.indexOf(string.charAt(i)); // Finds index of string letters in the alphabet
    if (alphaIndex === -1) {
      // If character is not in the alphabet, push as is, and "jumps over" iteration
      cipherText.push(string.charAt(i));
      continue;
    }
    const index = (alphaIndex + n) % alphabet.length; // Using Remainder Approach to cycle through the array
    cipherText.push(alphabet[index]);
  }
  return cipherText.join("");
}

export default caesarCipher;
