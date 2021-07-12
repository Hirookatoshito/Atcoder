function Main(input) {
  const n = +input
  let ans = n

  for (let i = 0; i < n; i++) {
    if (i % 10 == 7 || i.toString(8) % 10 == 7) {
      ans--
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));