function Main(input) {
  const [x, a] = input.split(' ').map(str => +str)
  x < a ? console.log('0') : console.log('10')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));