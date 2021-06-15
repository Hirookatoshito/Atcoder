function Main(input) {
  const [a, b] = input.split(' ').map(str => +str)
  ans = []
  if (a < b) {
    for (let i = 0; i < b; i++) {
      ans.push(a)
    }
  }
  if (a > b) {
    for (let i = 0; i < a; i++) {
      ans.push(b)
    }
  }
  if (a == b) {
    for (let i = 0; i < a; i++) {
      ans.push(b)
    }
  }
  console.log(ans.join(''))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));