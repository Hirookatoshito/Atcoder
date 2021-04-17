function Main(input) {
  const N = input.split('\n')[0]
  const I = Math.ceil(N / 7)
  const J = Math.ceil(N / 4)
  let A = "No"
  loop: for (i = 0; i <= 100; i++) {
    for (j = 0; j <= 100; j++) {
      if ((i * 7) + (j * 4) == N) {
        A = "Yes"
        break loop;
      }
    }
  }
  console.log(A)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));