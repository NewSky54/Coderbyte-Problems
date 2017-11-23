// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored 
// in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For 
// example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and 
// will contain at least 2 numbers. It can get tricky if there's just two numbers!
function secondGreatLow(arr) {
	let sorted = arr
		.sort((a, b) => a - b)
		.filter((elem, ind, ar) => arr.indexOf(elem) === ind);
	return sorted.length < 2
		? sorted[0] + ' ' + sorted[1]
		: sorted[1] + ' ' + sorted[sorted.length - 2];
	// console.log(sorted)
}
console.log(secondGreatLow([7, 106]));