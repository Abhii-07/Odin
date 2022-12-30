function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}
function multi(a, b) {
  return a * b;
}
function div(a, b) {
  if (b === 0) return null;
  return a / b;
}
export { add, sub, multi, div };
