function Main(input) {
  const temp1 = input.split('\n')[0]
  const temp2 = input.split('\n')[1]
  const [n, x] = temp1.split(' ').map(str => +str)
  const [...l] = temp2.split(' ').map(str => +str)

  let count = 0
  let ans = 1

  for (let i = 0; i < n - 1; i++) {
    count += l[i]
    if (count <= x) {
      ans++
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));