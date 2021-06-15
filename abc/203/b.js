function Main(input) {
  const [n, k] = input.split(' ').map(str => +str)

  let ans = 0
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      ans += i * 100 + j
    } 
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));