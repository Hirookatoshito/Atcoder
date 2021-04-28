function Main(input) {
  const N = +input
  max = 0
  for (let i = 0; i < Math.sqrt(N); i++) {
    if (N % i == 0) {
      max = i
    }
  }
  let result = Math.max(max, N/max).toString(10).length;
  console.log(result)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));