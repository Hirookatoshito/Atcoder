function Main(input) {
  const N = +input.split('\n')[0]
  const temp = input.split('\n')[1]
  const A = temp.split(' ').map(str => +str)

  let ans = 0;

  for (let i = 1; i < N + 1; i++) {
    if (A.includes(i)) {
      ans++
    }
  }

  ans == N ? console.log('Yes') : console.log('No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));