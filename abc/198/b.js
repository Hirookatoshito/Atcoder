function Main(input) {
  const input2 = input.split().reverse().join();
  if (input === input2) {
    console.log("Yes")
  } else {
    for (let i = 0; i < 9; i++) {
      input.join(0)
      console.log(input)
      if (input === input2) {
        console.log("Yes")
      }
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));