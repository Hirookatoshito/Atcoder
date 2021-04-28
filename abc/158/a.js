function Main(input) {
  const S = input
  if (S.includes('AB')) {
    console.log('Yes')
  } else if (S.includes('BA')) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));