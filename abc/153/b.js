function Main(input) {
  let [H, N] = input.split('\n')[0].split(' ')
  let [...a] = input.split('\n')[1].split(' ')
  let atack = 0
  for (let i = 0; i < N; i++) {
    atack = atack + +a[i]
  }
  if (H > atack) {
    console.log('No')
  } else {
    console.log('Yes')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));