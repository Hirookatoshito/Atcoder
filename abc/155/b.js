function Main(input) {
  const N = input.split('\n')[0]
  const A = input.split('\n')[1]
  const [...a] = A.split(' ').map(str => +str)
  let test = 0
  let ans = 0
  for (let i = 0; i < N; i++) {
    if (a[i] % 2 == 0) {
      test++
      if (a[i] % 3 == 0 || a[i] % 5 == 0) {
        ans++
      }
    }
  }
  if (test == ans) {
    console.log('APPROVED')
  } else {
    console.log('DENIED')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));