function Main(input) {
  const [N, S] = input.split("\n")
  const abc_s = S.split("ABC")
  console.log(abc_s.length - 1)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));