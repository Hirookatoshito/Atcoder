function main(input) {
  const S = input.slice(-2, -1)
  if (S === "s") {
    const es = input + "es"
    const es2 = es.split("\n")
    console.log(es2.join(""))
  } else {
    const es = input + "s"
    const es2 = es.split("\n")
    console.log(es2.join(""))
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
