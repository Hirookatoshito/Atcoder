function Main(input) {
  let n = +input
  let memo = {}

  memo[0] = 0
  memo[1] = 1

  const fib = (n) => {
    if (memo[n]) return memo[n]
    return (memo[n] = fib(n-1) + fib(n-2))
  }

  // 0 1 1 2 3 5 8 13 21

  console.log(fib(n-1))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));