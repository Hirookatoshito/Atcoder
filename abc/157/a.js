function Main(input) {
  console.log(Math.ceil(+input / 2))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));