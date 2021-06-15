function Main(input) {
  const temp = input.split('').map(str => +str)
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] == 6) {
      temp.splice(i, 1, 9)
    } else if (temp[i] == 9) {
      temp.splice(i, 1, 6)
    }
  }
  temp.pop()
  console.log(temp.reverse().join(''))
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));