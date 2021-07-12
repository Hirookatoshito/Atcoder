function Main(input) {
  let temp = input.split('\n')
  const [n , k] = temp[0].split(' ').map(str => +str)
  const a = temp[1].split(' ').map(str => +str)

  for (let i = 0; i < n; i++) {
    if (k > i + 1) {
      console.log(a[i] + k / n)
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));