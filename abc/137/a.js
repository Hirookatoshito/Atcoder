function Main(input) {
  const [A, B] = input.split(' ').map(str => +str)
  const ans1 = A + B
  const ans2 = A - B
  const ans3 = A * B
  console.log(Math.max(ans1, ans2, ans3))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));