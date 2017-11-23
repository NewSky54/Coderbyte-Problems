//Using the JavaScript language, have the function FirstReverse(str) take the str parameter being passed and 
// return the string in reversed order. For example: if the input string is "Hello World and Coders" then your 
// program should return the string sredoC dna dlroW olleH.
function firstReverse(str) {
	let result = '';
	for (let i = str.length; i >= 0; i--) {
		result += str.charAt(i);
		// result += str[i]; //Returns undefined if used on a string. Use .charAt(i)
	}
	return result;
}
console.log(firstReverse("Hello Codesmith!"));