function Main(input) {
  const [a, s] = input.split('\n')
  if (a >= 3200) {
    console.log(s)
  } else {
    console.log('red')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));