function Main(input) {
  let [N, K] = input.split(' ').map(str => +str)
  console.log(N.toString(K).length)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));