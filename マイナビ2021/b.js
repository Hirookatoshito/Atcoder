function Main(input) {
  const temp = input.split('\n');
  const N = temp[0]
  let ans = []
  for (let i = 1; i <= N; i++) {
    ans.push(temp[i].split(' ')[1])
  }
  ans.sort((a, b) => b - a)
  for (let i = 1; i <= N; i++) {
    if (ans[1] == temp[i].split(' ')[1]) {
      console.log(temp[i].split(' ')[0])
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));