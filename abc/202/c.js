function Main(input) {
  const temp = input.split('\n')
  console.log(temp)
  const N = temp[0]
  const [...a] = temp[1].split('').map(str => +str)
  const [...b] = temp[2].split('').map(str => +str)
  const [...c] = temp[3].split('').map(str => +str)

  let ans = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (a[i] == b[j]) {
        for (let t = 0; t < N; t++) {
          if (j + 1 == c[t]) {
            ans++
          }
        }
      }
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));