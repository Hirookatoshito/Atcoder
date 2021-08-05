function Main(input) {
  const x = input.split('').map(str => +str)
  let ans = 0
  let t = 0
  for (let i = 1; i < x.length - 1; i++) {
    if (x[0] == x[i]) {
      t++
    }
    if (x[0] + i == x[i] || x[0] == 9 && x[i] == i - 1) {
      ans++
    }
  }
  console.log(t == 3 ? 'Weak' : ans == 3 ? 'Weak' : 'Strong')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));