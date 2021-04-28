function Main(input) {
  let [h, a] = input.split(' ') 
  let ans = 0
  while (h > 0) {
    h = h - a
    ans++
  }
  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));