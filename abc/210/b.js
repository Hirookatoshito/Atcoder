function Main(input) {
  const temp = input.split('\n')
  const n = +temp[0]
  const s = temp[1]

  for (let i = 0; i < n; i++) {
    if (+s[i] == 1) {
      console.log(i % 2 == 0 ? 'Takahashi' : 'Aoki')
      break
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));