function Main(input) {
  const N = +input
  let ans = "No"
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i * j == N) {
        ans = "Yes"
      }
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));