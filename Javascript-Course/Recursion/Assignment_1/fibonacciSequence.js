// Iterative Way

let n = 8;
const fibs = function(n){
    let arr= [1, 1];
    for (let i = 3; i < n; i += 1) {
      arr.push(arr[i - 2] + arr[i - 3]);
    }
    return arr; 
}

// N= 8 
// Output = [1, 1, 2, 3, 5, 8, 13]

// ***********************************************************************************************************************

// Recusive
const fibsRec = function(n, fibonacciArray = [0, 1]) {
    if (fibonacciArray.length >= n) return fibonacciArray.slice(0, n + 1);
  
    const nextFibonacciNumber = fibonacciArray.at(-1) + fibonacciArray.at(-2);
    fibonacciArray.push(nextFibonacciNumber);
    return fibsRec(n, fibonacciArray);
}


// N= 8 
// Output = [1, 1, 2, 3, 5, 8, 13]