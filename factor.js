const fact = x => {
if (x < 0) {
  return "nope"
}
  if (x === 0) {
    return 1
  }
  return x * fact(x-1)
}
fact(5)
