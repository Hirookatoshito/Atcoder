function Main(input) {
  const temp = input.split('\n')
  const H = +temp[0].split(' ')[0]
  const W = +temp[0].split(' ')[1]

  let ans = 0
  let a = []

  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      ans += +temp[1 + i].split(' ')[j]
      a.push(+temp[1 + i].split(' ')[j])
    }
  }

  console.log(ans - Math.min.apply(null, a) * H * W)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));