function Main(input) {
  input = input.split("\n").map((str) => parseInt(str));
  let N = input.shift();
  let d = input.sort((a, b) => a - b);
  console.log(d)
  let count = 0
  for (let i = 0; i < N - 1; i++) {
    if (d[i] < d[i + 1]) {
      count++;
    }
  }
  console.log(count + 1);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));