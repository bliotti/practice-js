let que = [2, 1, 5, 3, 4]
let que1 = [2, 5, 1, 3, 4]
let que2 = [5, 1, 2, 3, 7, 8, 6, 4]
let que3 = [1, 2, 5, 3, 7, 8, 6, 4]
let que3a = [1, 2, 5, 3, 7, 8, 4, 6]
let que3t = [1, 2, 5, 3, 7, 8, 6, 4]
let que4 = [1, 2, 5, 3, 4, 7, 8, 6]
let queCheck = [1, 2, 3, 4, 5]

const minimumBribes = q => {
	let offsetArr = q.map((val, idx) => val - idx - 1)

	if (Math.max(...offsetArr) > 2) {
		console.log('Too chaotic')
		return 'Too choatic'
	} else {
		let swaps = 0
		let swapped

		do {
			swapped = false
			for (let i = 0; i < q.length; i++) {
				if (q[i + 1] && q[i] > q[i + 1]) {
					swaps++
					;[q[i], q[i + 1]] = [q[i + 1], q[i]]
					swapped = true
				}
			}
		} while (swapped)

		console.log(swaps)
		return swaps
	}
}

console.log(minimumBribes(que))
console.log(minimumBribes(que1))
console.log(minimumBribes(que2))
console.log(minimumBribes(que3))
console.log(minimumBribes(que4))
console.log(minimumBribes(queCheck))
