function Main(input) {
  let [N, R] = input.split(' ').map(str => +str)
  if (N < 10) {
    R += (10 - N) * 100
  }
  console.log(R)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));