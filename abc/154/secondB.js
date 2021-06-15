function Main(input) {
  const S = input
  let ans = [];
  for (i = 1; i < S.length; i++) {
    ans.push('x')
  }
  console.log(ans.join(''))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));