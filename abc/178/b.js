function Main(input) {
  const [a, b, c, d] = input.split(' ').map(num => +num)
  const ans1 = a * d
  const ans2 = b * c
  const ans3 = a * c
  const ans4 = b * d
  console.log(Math.max(ans1, ans2, ans3, ans4))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));