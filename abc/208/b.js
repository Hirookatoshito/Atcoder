function Main(input) {
  let p = +input

  let ans = 0

  function factorialize(k) {
    var j = 1;
    for(var i = 1; i <= k; i++){
      j *= i;
    }
    return j;
  }

  for (let i = 10; i > 0; i--) {
    while (p >= factorialize(i)) {
      p -= factorialize(i)
      ans++
    }
  }

  console.log(ans)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));