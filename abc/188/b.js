function Main(input) {
  const N = +input.split('\n')[0]
  const temp = input.split('\n')
  const [...a] = temp[1].split(' ').map(str => +str) 
  const [...b] = temp[2].split(' ').map(str => +str) 

  let ans = 0

  for (let i = 0; i < N; i++) {
    ans += a[i] * b[i]
  }

  ans == 0 ? console.log('Yes') : console.log('No')

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));