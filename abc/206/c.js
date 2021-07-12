function Main(input) {
  const n = +input.split('\n')[0]
  const temp = input.split('\n')[1]
  const a = temp.split(' ').map(str => +str)

  let ans = 0;

  for (let i = 0; i < n - 1; i++) {
    for (let j = i; j < n; j++) {
      if (i < j && a[i] !== a[j]) {
        ans++
      }
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));