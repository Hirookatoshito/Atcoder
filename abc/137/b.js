function Main(input) {
  const [K, X] = input.split(' ').map(str => +str)
  let s = X - K + 1
  let g = X + K + 1
  let ans = []
  for (let i = s; i < g - 1; i++) {
    ans.push(i)
    // console.log(i)
  }
  console.log(ans.join(' '))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));