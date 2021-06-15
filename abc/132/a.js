function Main(input) {
  const [...S] = input.split('')
  S.sort();
  S.shift()
  if (S[0] == S[3] && S[1] == S[2]) {
    console.log('No')
  } else if (S[0] == S[1] && S[2] == S[3]) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));