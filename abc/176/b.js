function Main(input) {
  const n = input
  let ans = 0
  for (let i = 0; i < n.length; i++) {
    ans += +n[i]
  }
  console.log(ans % 9 == 0 ? 'Yes' : 'No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));