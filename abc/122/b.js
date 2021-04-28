function Main(input) {
  const str = input
  console.log(str[0])
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));