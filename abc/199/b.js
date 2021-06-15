function Main(input) {
  const N = input.split('\n')[0]
  const temp1 = input.split('\n')[1]
  const [...A] = temp1.split(' ').map(str => +str)
  const temp2 = input.split('\n')[2]
  const [...B] = temp2.split(' ').map(str => +str)

  let ans = []

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < B[i] - A[i]; j++) {
      ans.push(A[i] + j)
    }
  }

  var strCount = function(searchStr, str) {
    if (typeof searchStr !== 'string' && typeof searchStr !== 'number') return 0;
    if (typeof str !== 'string' && typeof str !== 'number') return 0;
    if (searchStr === '' || str === '') return 0;
 
    return (String(str).match(new RegExp(String(searchStr), 'g')) || []).length;
  };

  for (let i = 0; i < 1001; i++) {
    if ((ans.match(/i/g) || []).length == N) {
      ans2++
    }
  }

  console.log(ans2)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));