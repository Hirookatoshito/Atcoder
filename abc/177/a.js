function Main(input) {
  const [D, T, S] = input.split(' ')
  if (T * S >= D) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));