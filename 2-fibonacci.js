// FIBONACCI NUMBER
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233 ...
// Fib(0) = 0, Fib(1) = 1
// Fin(n - 1) + Fib(n - 2), for n > 1

// Input: n = 3 ----------->>>>>>>>>>> 2

const fibonacci = (num) => {
  if (num <= 1) return num;
  else return fibonacci(num - 1) + fibonacci(num - 2);
};

const fib = (num, prevNum = []) => {
  let result;
  if (prevNum[num] != null) {
    return prevNum[num];
  }
  if (num <= 1) {
    return num;
  } else {
    result = fib(num - 1, prevNum) + fib(num - 2, prevNum);
  }
  prevNum[num] = result;
  return result;
};

console.time()
console.log(fibonacci(25))
console.timeEnd()

console.time()
console.log(fibonacci(30))
console.timeEnd()