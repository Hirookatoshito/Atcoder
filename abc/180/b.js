function Main(input) {
  const temp = input.split('\n')
  const N  = +temp[0]
  const x = temp[1].split(' ').map(str => +str)

  let sum = 0
  let h = 0
  let t = []

  for (let i = 0; i < N; i++) {
    sum += Math.abs(x[i])
    h += Math.abs(x[i]) * Math.abs(x[i])
    t.push(Math.abs(x[i]))
  }

  console.log(sum)
  console.log(Math.sqrt(h))
  console.log(Math.max(...t))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));