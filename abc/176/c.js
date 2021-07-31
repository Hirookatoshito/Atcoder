function Main(input) {
  let temp = input.split('\n')
  const n = +temp[0]
  const a = temp[1].split(' ').map(str => +str)

  let ans = 0

  for (let i = 1; i < n; i++) {
    if (a[i] < a[i-1]) {
      ans += a[i-1] - a[i]
      a[i] += a[i-1] - a[i]
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));