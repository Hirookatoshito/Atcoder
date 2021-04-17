function Main(input) {
  if (input % 2 == 0) {
    console.log("White");
  } else {
    console.log("Black");
  }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));