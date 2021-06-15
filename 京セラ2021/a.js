function Main(input) {
  const [...N] = input.split('')
  let temp = ""
  if (N.length == 5) {
    temp = N[0] + N[1]
    if (N[2] !== "0" || N[3] !== "0") {
      console.log(+temp + 1)
    } else {
      console.log(+temp)
    }
  }
  if (N.length == 4) {
    temp = N[0]
    if (N[1] !== "0" || N[2] !== "0") {
      console.log(+temp + 1)
    } else {
      console.log(temp)
    }
  }
  if (N.length == 3) {
    console.log("1")
  }
  if (N.length == 2) {
    console.log("1")
  }
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));