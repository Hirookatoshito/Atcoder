function Main(input) {
  let line = input.split('\n')
  const a = line[0]
  const b = line[1]
  const c = line[2]
  const x = line[3]
  let count = 0;
  for (let i = 0; i <= a; i++) {
    for (let j = 0; j <= b; j++) {
      for (let k = 0; k <= c; k++) {
        if (i * 500 + j * 100 + k * 50 == x) {
          count++
        }
      }
    }
  }
  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));