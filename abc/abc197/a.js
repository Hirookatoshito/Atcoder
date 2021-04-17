function Main(input) {
  const [a, b, c] = input.split('')
  console.log(b + c + a)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));