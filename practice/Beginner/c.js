function Main(input) {
  const nums = input.split('\n')
  const N = nums[0]
  const nums2 = nums[1].split(' ')
  let flg = true
  let count = 0
  while (flg === true) {
    for (let i = 0; i < N; i++) {
      if (nums2[i] % 2 !== 0) {
        flg = false
        break;
      } else {
        nums2[i] = nums2[i] / 2
      }
    }
    if (flg === true) {
      count++
    }
  }
  console.log(count)
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
