function Main(input) {
  let money = input;
  let happy = 0;
  const num500 = Math.floor(money /500);
  happy += (num500 * 1000)
  money -= (num500 * 500)
  const num5 = Math.floor(money / 5)
  happy += (num5 * 5)
  console.log(happy);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));