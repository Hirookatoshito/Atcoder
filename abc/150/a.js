function Main(input) {
  const [k, x] = input.split(" ");
  if ((500 * k) >= x) {
    console.log("Yes")
  } else {
    console.log("No")
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));