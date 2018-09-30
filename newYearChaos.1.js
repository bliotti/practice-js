let que = [2, 1, 5, 3, 4]
let que1 = [2, 5, 1, 3, 4]
let que2 = [5, 1, 2, 3, 7, 8, 6, 4]

let que3 = [1, 2, 5, 3, 7, 8, 6, 4]
let que3a = [1, 2, 5, 3, 7, 8, 4, 6]
let que3t = [1, 2, 5, 3, 7, 8, 6, 4]

let que4 = [1, 2, 5, 3, 4, 7, 8, 6]
let queCheck = [1, 2, 3, 4, 5]

function minimumBribes(q) {
  let offsetArr = q.map((val, idx) => val - idx - 1)

  console.log(offsetArr)

  let positive =
    Math.max(...offsetArr) > 2
      ? 'Too chaotic'
      : offsetArr.reduce((acc, cur) => (cur > 0 ? acc + cur : acc), 0)

  console.log(positive)

  let negative =
    Math.max(...offsetArr) > 2
      ? 'Too chaotic'
      : offsetArr.reduce((acc, cur) => (cur < 0 ? acc + cur : acc), 0)

  console.log(negative)

  return positive
}

// console.log(minimumBribes(que))
// console.log(minimumBribes(que1))
// console.log(minimumBribes(que2))
console.log(minimumBribes(que3))
console.log(minimumBribes(que3a))
console.log(minimumBribes(que3t))
// console.log(minimumBribes(que4))
// console.log(minimumBribes(queCheck))

// console.log(minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
// console.log(minimumBribes([1, 2, 5, 3, 7, 6, 8, 4]))
// console.log(minimumBribes([1, 2, 5, 3, 6, 7, 8, 4]))
// console.log(minimumBribes([1, 2, 3, 5, 6, 7, 8, 4]))
// console.log(minimumBribes([1, 2, 3, 5, 6, 7, 4, 8]))
// console.log(minimumBribes([1, 2, 3, 5, 6, 4, 7, 8]))
// console.log(minimumBribes([1, 2, 3, 5, 4, 6, 7, 8]))
// console.log(minimumBribes([1, 2, 3, 4, 5, 6, 7, 8]))
