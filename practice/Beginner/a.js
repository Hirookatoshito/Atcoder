function Main(input) {
  const tmp = input.split('\n');
  const a = Number(tmp[0])
  const [b, c] = Number(tmp[1])
  const s = tmp[2]
  const N = a + b + c
  console.log(N)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));