function Main(input) {
  const temp = input.split('\n')
  const N = +temp[0]
  let S = temp[1]

  console.log(N, S)

  let ans = []
  for (let i = N - 4; i < N; i++) {
    if(ans.includes(S.slice(i, i + N - 3))) {
      continue
    } else {
      ans.push(S.slice(i, i + N - 3))
    }
  }
  console.log(ans.length)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));