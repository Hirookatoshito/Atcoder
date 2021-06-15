function Main(input) {
  let [n, d] = input.split(' ').map(str => +str);
  let ans = 0;
  for (let i = 0; i < 20; i++) {
    if (n > 0) {
      ans++
      n = n - (d * 2 + 1)
    }
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));