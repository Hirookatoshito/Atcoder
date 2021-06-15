function Main(input) {
  const N = +input
  let flg = false
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      if (i * j == N) {
        flg = true
      }
    }
  }
  if (flg == true) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));