function Main(input) {
  const [...a] = input.split(' ').map(str => +str)
  a.sort((a, b) => b - a);

  if (a[0] - a[1] == a[1] - a[2]) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));