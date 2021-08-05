function Main(input) {
  let temp = input.trim().split('\n')
  const [n, d] = temp[0].split(' ').map(str => +str)
  let ans = 0
  for (let i = 1; i < n; i++) {
    let [x, y] = temp[i].split(' ').map(str => +str)
    if (Math.sqrt(x ** 2 + y ** 2) <= d) {
      ans++
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));