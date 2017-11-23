// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case 
// of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and 
// symbols stay the way they are. 
function swapCase(str) {
	let arr = str.split('');
	for (let i = 0; i < arr.length; i += 1) {
		(arr[i].match(/[a-z]/)) ?
			arr[i] = arr[i].toUpperCase() :
			arr[i] = arr[i].toLowerCase();
	}
	return arr.join('');
}
console.log(swapCase('Hell%#* World'));