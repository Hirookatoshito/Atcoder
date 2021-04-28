function Main(input) {
  const temp = input.split("\n");
  const test = "test"
  const N = temp[0];
  const [...a] = temp[1].split(' ').map(a => +a);
  a.sort(function (b, c) {
    if (b > c) return -1;
    if (b < c) return 1;
    return 0;
  });
  let alice = 0
  let bob = 0
  for (let i = 1; i <= N; i++) {
    if (i % 2 == 0) {
      bob += a[i - 1]
    } else {
      alice += a[i - 1]
    }
  }
  console.log(alice - bob)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
