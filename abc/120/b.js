function Main(input) {
  const [A, B, K] = input.split(' ').map(str => +str)
  let ans = []
  for (let i = 1; i <= 100; i++) {
    if ((A % i == 0) && (B % i == 0)) {
      ans.unshift(i)
    }
  }
  console.log(ans[K - 1])
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));