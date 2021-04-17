function Main(input) {
  const N = input.split("\n")[0];
  let r = 0;
  for (let i = 1; i < N.length; i++) {
    const [a, b] = input[i].split(" ");
    for (let t = a; t < b; t++) {
      r + a;
    }
  }
  console.log(r);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));