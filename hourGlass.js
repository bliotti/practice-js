const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]

let result = []
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 4; j++) {
    let center = arr[1 + i][j + 1]
    console.log(center)

    let top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
    console.log(top)

    let bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
    console.log(bottom)

    result.push(center + top + bottom)
  }
}
console.log(Math.max(...result))
