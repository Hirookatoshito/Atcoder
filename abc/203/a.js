function Main(input) {
  const [a, b, c] = input.split(' ').map(str => +str)
  if (a == b) {
    console.log(c)
  } else if (a == c) {
    console.log(b)
  } else if (c == b) {
    console.log(a)
  } else {
    console.log('0')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));