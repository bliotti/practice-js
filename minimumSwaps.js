const minimumSwaps = arr => {
	let arrWithIndex = arr.map((val, idx) => [idx, val])

	arrWithIndex.sort((a, b) => a[1] - b[1])

	let vis = []
	for (let x in arr) {
		vis.push(false)
	}

	let ans = 0
	for (let i = 0; i < arr.length; i++) {
		if (vis[i] == true || arrWithIndex[i][0] === i) {
			continue
		}
		let cycle_size = 0
		let j = i
		j
		while (!vis[j]) {
			vis[j] = true
			j = arrWithIndex[j][0]
			cycle_size++
		}
		if (cycle_size > 0) {
			ans += cycle_size - 1
		}
	}

	return ans
}

let arr = [1, 5, 4, 3, 2]
let arr1 = [7, 1, 3, 2, 4, 5, 6]
let arr2 = [1, 3, 5, 2, 4, 6, 8]

console.log(minimumSwaps(arr))
console.log(minimumSwaps(arr1))
console.log(minimumSwaps(arr2))
