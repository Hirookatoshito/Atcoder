function Main(input) {
  const N = input.split('\n')[0]
  const temp = input.split('\n')[1]
  const [s, t] = temp.split(' ')
  ans = []
  for (let i = 0; i <= N * 2 - 1; i++) {
    ans.push(s[i])
    ans.push(t[i])
  }
  console.log(ans.join(''))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));