function Main(input) {
  const [a, b] = input.split(' ')
  console.log(2 * a + 100 - b)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));