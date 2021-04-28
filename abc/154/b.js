function Main(input) {
  const S = input.split('\n')[0]
  let ans = ''
  for (let i = 0; i < S.length; i++) {
    ans = ans + 'x'
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));