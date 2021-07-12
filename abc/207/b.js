function Main(input) {
  let [a, b, c, d] = input.split(' ').map(str => +str)

  let r = 0
  let ans = 0

  for (let i = 0; i < 1000000; i++) {
    a += b
    r += c
    if (a <= r * d) {
      ans += i + 1
      break
    }
  }

  ans == 0 ? console.log('-1') : console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));