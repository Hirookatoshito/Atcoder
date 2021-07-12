function Main(input) {
  const N = +input

  let ans = 0;

  for (let i = 1; i <= 1000000000; i++) {
    ans += i
    if (ans >= N) {
      console.log(i)
      break
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));