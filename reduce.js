const array1 = [0, 1, 2, 3, 4]
const accumulate = array1 => {
  array1.reduce(
    (accumulator, currentValue, currentIndex, array) =>
      accumulator + currentValue
  )
}

const array2 = [[0, 1], [2, 3], [4, 5]]
const flatten = array2 => {
  array2.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  )
}

const names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

const countInstancesofObjects = names => {
  return names.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name] = allNames[name] + 1
    } else {
      allNames[name] = 1
    }
    return allNames
  }, {})
}

console.log(countInstancesofObjects(names))

const n = 9
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]

console.log(ar.includes(20))

let ccc = ar.reduce((prev, curr) => {
  if (curr in prev) {
    prev[curr]++
  } else {
    prev[curr] = 1
  }
  return prev
}, {})

Object.values(ccc).reduce((prev, curr) => {
  let result = curr % 2 === 0 ? curr / 2 : curr === 1 ? 0 : Math.floor(curr / 2)
  return result + prev
}, 0)

let count = 0
console.log(ar)

for (let i of ar) {
  if (i === 20) {
    count++
  }
  console.log(count)
}

console.log(count)

// const  sockMerchant = (n, ar) => {
//     return sum(

//       [(ar.count(i) / 2) for i in set(ar)]

//       )
//   }

var arr = [2, 2, 2, 4, 5, 5, 5, 2, 2, 9]

for (var x of arr) console.log(x)
for (var x in arr) console.log(x)
for (var i = 0; i < arr.length; i++) console.log(i)
arr.map((x, i) => {
  console.log(x, i)
})

function foo(arr) {
  var a = [],
    b = [],
    prev

  console.log(arr.sort())
  for (let i in arr) {
    arr[i] !== prev ? (a.push(arr[i]), b.push(1)) : b[b.length - 1]++
    prev = arr[i]
  }

  return [a, b]
}

var result = foo(arr)
console.log(result)
