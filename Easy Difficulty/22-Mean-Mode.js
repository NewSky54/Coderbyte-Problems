// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr 
// and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should 
// return 1 because the mode(3) equals the mean(3)).The array will not be empty, will only contain
// positive integers, and will not contain more than one mode.
function meanMode(arr) {
	let len = arr.length;
	function mean(arr) {
		let count = 0;
		for (let i = 0; i < len; i += 1) {
			count += arr[i];
		}
		return count / len;
	}

	function mode(arr) {
		let table = {};
		let answer = { num: null, count: 0 };
		for (let i = 0; i < len; i += 1) {
			let num = arr[i];
			(table[num] === undefined) ? table[num] = 1 : table[num] += 1;
		}
		for (let key in table) {
			if (table[key] > answer['count']) {
				answer['count'] = table[key];
				answer['num'] = key;
			}
		}
		return answer.num;
	}
	return mode(arr) == mean(arr) ? 1 : 0;
}
meanMode([4, 4, 4, 6, 2]);
// meanMode([1, 3, 3, 3, 5]);