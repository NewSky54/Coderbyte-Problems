// Using the JavaScript language, have the function dashInsert(str) insert dashes ('-') between each two 
// odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an 
// odd number. 
function dashInsert(str) {
	let arr = str.split('');
	for (let i = 0; i < arr.length - 1; i += 1) {
		if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
			arr[i] += '-';
		}
	}
	return arr.join('');
}
console.log(dashInsert('77993'));