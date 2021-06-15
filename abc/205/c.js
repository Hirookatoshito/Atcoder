function Main(input) {
  const [a, b, c] = input.split(' ').map(str => +str)

  if (c % 2 == 0) {
    // if (a > 0 && b > 0) {
    //   Math.abs(a) > Math.abs(b) ? console.log('>') : console.log('<')
    // } else if (a > 0 || b > 0) {
    //   Math.abs(a) == Math.abs(b) ? console.log('=')
    //   : a > 0 ? console.log('>') : console.log('<')
    // } else if(a < 0 && b < 0) {
    //   Math.abs(a) > Math.abs(b) ? console.log('<') : console.log('>')
    // }
    if(Math.abs(a) < Math.abs(b)){
      console.log('<')
    } else if(Math.abs(a) > Math.abs(b)) {
      console.log('>')
    } else {
      console.log('=')
    }
  } else {
    if(a < b){
      console.log('<')
    } else if(a > b) {
      console.log('>')
    } else {
      console.log('=')
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));