const analyzeArray = (array) => {
  if (!Array.isArray(array)) return "This is not an Array";
  const onlyNumbers = array.every((currentValue) => typeof currentValue === "number"); // If every element of the arrays is a number: true
  if (!onlyNumbers) return "All elements of the array must be numbers";
  let average = getAverage(array);
  let min = getMin(array);
  let max = getMax(array);
  let length = array.length;

  return { average, min, max, length };
};

let getAverage = (array) => array.reduce((a, b) => a + b) / array.length;
let getMin = (array) => Math.min(...array);
let getMax = (array) => Math.max(...array);

export default analyzeArray;
