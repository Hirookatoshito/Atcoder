function Main(input) {
  const temp = input.split('\n')
  const n = +temp[0]
  const p = temp[1].split(' ').map(str => +str)

  let ans = 0

  for (let i = 0; i < n; i++) {
    if (p[i] !== i+1) {
      ans++
    }
  }

  console.log(ans == 2 || ans == 0 ? 'YES': 'NO')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));