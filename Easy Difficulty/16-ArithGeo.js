// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr 
// and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it 
// follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence 
// is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each 
// term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and 
// Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered,
function ArithGeo(arr) {
	if (isAri(arr) !== false) {
		return 'Arithmetic';
	}
	if (isGeo(arr) !== false) {
		return 'Geometric';
	}
	return -1;
}
function isAri(arr) {
	const diff = arr[1] - arr[0];
	return arr.reduce(
		(num, next) => (next - num !== diff || arr.length === 1 ? false : next)
	);
}

function isGeo(arr) {
	const ratio = arr[1] / arr[0];
	return arr.reduce(
		(num, next) => (next / num !== ratio || arr.length === 1 ? false : next)
	);
}
console.log(ArithGeo([3]));