function main(input) {
  const N = input
  let temp = 1
  while (temp * 2 <= N) {
    temp = temp * 2
  }
  console.log(temp)
  // const N = input;
  // let flg = true;
  // let count = 0;
  // let counts = [];

  // for (let i = 0; i < N; i++) {
  //   flg = true;
  //   count = 0;
  //   let t = i
  //   while (flg === true) {
  //     if (i % 2 === 0) {
  //       t = t / 2;
  //       count++;
  //     } else {
  //       flg === false;
  //       counts.push(count);
  //     }
  //   }
  // }
  // console.log(counts);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
