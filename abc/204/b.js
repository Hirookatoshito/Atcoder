function Main(input) {
  const N = +input.split('\n')[0]
  const temp = input.split('\n')[1]
  const [...a] = temp.split(' ').map(str => +str)

  let ans = 0;

  for (let i = 0; i < N; i++) {
    if (a[i] > 10) {
      ans += a[i] - 10
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));