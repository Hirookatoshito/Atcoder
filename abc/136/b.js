function Main(input) {
  const N = +input
  let ans = 0
  for (let i = 1; i <= N; i++) {
    if (i >= 1 && i < 10) {
      ans++
    }
    if (i >= 100 && i < 1000) {
      ans++
    }
    if (i >= 10000 && i < 100000) {
      ans++
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));