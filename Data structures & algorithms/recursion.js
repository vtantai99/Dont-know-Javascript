// Recursion
// Calc with fibonacci: 1 1 2 3 5 8 13 21
const fib = (n) => {
  return n < 2 ? 1 : fib(n-1) + fib(n-2)
}


// Explain:
// fib(4) = fib(3) + fib(2)
// = fib(2) + fib(1) + fib(1) + fib(0)
// = fib(1) + fib(0) + 3
// = 2 + 3
// = 5

console.log(fib(4))