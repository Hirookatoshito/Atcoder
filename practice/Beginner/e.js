function Main(input) {
  const temp = input.split(' ')
  const N = temp[0]
  const A = temp[1]
  const B = temp[2]
  console.log(N, A, B)
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));