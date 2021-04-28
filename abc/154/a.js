function Main(input) {
  const [R, C] = input.split('\n')[0].split(' ')
  let [A, B] = input.split('\n')[1].split(' ').map(str => +str)
  let [d] = input.split('\n')[2].split(' ')
  if (d == R) {
    A = A - 1
  } else {
    B = B - 1
  }
  console.log(A, B)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));