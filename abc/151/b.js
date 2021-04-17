function Main(input) {
  const temp = input.split("\n")
  const [N, K, M] = temp[0].split(" ")
  const point = temp[1].split(" ")
  const goal = N * M
  let points = 0
  for (let i = 0; i < point.length; i++) {
    parseInt(point[i], 10)
    points = points + point[i]
  }
  console.log(points)
  // if (K > (goal - (point[])) {}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));