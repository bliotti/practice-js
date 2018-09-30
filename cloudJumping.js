const arr = [0, 0, 1, 0, 0, 1, 0, 1, 0, 0]
let jump = 0

arr.reduce(acc => {
  if (acc + 2 <= arr.length) {
    arr[acc + 2] === 1 ? acc++ : (acc = acc + 2)
    jump++
  }

  return acc
}, 0)
