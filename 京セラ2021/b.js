function Main(input) {
  let [N, K] = input.split(' ').map(str => +str)
  for (let i= 0; i < K; i++) {
    N % 200 == 0 ?  N = N / 200 : N = N * 1000 + 200
  }
  console.log(N)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));