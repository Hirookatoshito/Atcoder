function Main(input) {
  const [N, M] = input.split('\n')[0].split(' ').map(str => +str)
  const [...temp] = input.split('\n')

  let ans = N + M;

  for (let i = 0; i < M; i++) {
    if (temp[i + 1].split(' ')[1] == temp[i + 2].split(' ')[0] == temp[i + 2].split(' ')[0]) {
      ans++
    } else if (temp[i + 1].split(' ')[1] == temp[i + 2].split(' ')[0]) {
      ans++
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));