function Main(input) {
  const X = +input
  if (X == 0) {
    console.log(1)
  } else {
    console.log(0)
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));