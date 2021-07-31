function Main(input) {
  let s = input.split('\n')
  
  const set = new Set(s)
  console.log(set.size - 1 == 4 ? 'Yes' : 'No')
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));