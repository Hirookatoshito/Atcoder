function Main(input) {
  const temp = input.split('\n')
  const n = +temp[0]
  let h = temp[1]
  console.log(n, h)

  let flg = true

  for (let i = 0; i < n; i++) {
    if (+h[i] ) {
      
    }
  }

  if (flg) {
    console.log('Yes')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));