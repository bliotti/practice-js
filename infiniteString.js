const str = 'ceebbcb'
const n = 817723

let subCounter = string => {
  let test = string.split('')
  let count = 0
  test.forEach(e => {
    e === 'a' ? count++ : null
  })
  return count
}
console.log(subCounter(str))
console.log(Math.floor(n / str.length))

let baseCountAs = Math.floor(n / str.length) * subCounter(str)

console.log(baseCountAs)

let strRemaining = str.slice(0, n % str.length)

console.log(strRemaining)
console.log(subCounter(strRemaining))

let result = baseCountAs + subCounter(strRemaining)

console.log(result)
