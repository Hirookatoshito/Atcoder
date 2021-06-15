function Main(input) {
  const N = +input.split('\n')[0];
  const temp = input.split('\n')[1]
  const [...d] = temp.split(" ").map(str => +str)

  let ans = 0

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      ans += d[i] * d[j]
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));