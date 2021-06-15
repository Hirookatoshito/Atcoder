function Main(input) {
  const [a, b, c] = input.split(' ').map(str => +str)
  if (a * a + b * b < c * c) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));