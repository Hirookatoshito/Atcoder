function Main(input) {
  const N = +input
  let ans = 0
  for (let i = 1; i <= N; i += 2) {
    let count = 0
    for (let j = 1; j <= i; j++) {
      let a = i
      let b = j
      if (a % b == 0) {
        count++
        if (count == 8) {
          ans++
        }
      }
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));