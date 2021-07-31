function Main(input) {
  let temp = input.split('\n')
  const [n , x] = temp[0].split(' ').map(str => +str)
  const a = temp[1].split(' ').map(str => +str)

  let ans = 0

  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      ans += a[i-1] - 1
    } else {
      ans+= a[i-1]
    }
  }
  console.log(ans <= x ? 'Yes' : 'No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));