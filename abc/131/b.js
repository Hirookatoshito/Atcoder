function Main(input) {
  const N = +input.split(' ')[0]
  const L = +input.split(' ')[1]
  let a = 0
  for (let i = 1; i <= N; i++) {
    a += L + i - 1
  }
  if (L > 0) {
    a = a - (L)
  }
  if (L === 0) {
    a = a
  }
  if (L < 0) {
    let l = -(L)
    if (l < N) {
      a = a
    } else {
      a = a - (L + N - 1)
    }
  }
  console.log(a)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));