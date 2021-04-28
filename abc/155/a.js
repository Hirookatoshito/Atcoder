function Main(input) {
  const [a, b, c] = input.split(' ');
  if (a == b && c !== a) {
    console.log("Yes")
  }
  if (a == c && b !== a) {
    console.log("Yes")
  }
  if (c == b && a !== b) {
    console.log("Yes")
  }
  if (a == b == c) {
    console.log('No')
  }
  if (a !== b && b !== c) {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));