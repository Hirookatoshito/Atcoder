function Main(input) {
  const N = +input

  let ans = []
  
  for (let i = 1; i <= Math.sqrt(N); i++) {
    if (N % i == 0) {
      ans.push(i)
      ans.push(N / i)
    }
  }

  ans.sort(function(a, b){
    if( a < b ) return -1;
    if( a > b ) return 1;
    return 0;
  })

  let ans2 = Array.from(new Set(ans))
  ans2.map(A => {
    console.log(A)
  })
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));