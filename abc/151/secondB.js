function Main(input) {
  const temp = input.split('\n')[0]
  const [N, K, M] = temp.split(' ').map(str => +str)
  const temp2 = input.split('\n')[1]
  const [...A] = temp2.split(' ').map(str => +str);
  let ans = 0
  for (let i = 0; i < N - 1; i++) {
    ans += A[i]
  }
  let a = N * M - ans
  if (a <= K && a > 0) {
    console.log(N * M - ans)
  } else if (a <= 0) {
    console.log('0')
  } else {
    console.log('-1')
  }
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));