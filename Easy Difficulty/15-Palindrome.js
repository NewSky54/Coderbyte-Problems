// Using the JavaScript language, have the function Palindrome(str) take the str parameter being passed and 
// return the string true if the parameter is a palindrome, (the string is the same forward as it is backward) 
// otherwise return the string false. For example: "racecar" is also "racecar" backwards. Punctuation and numbers 
// will not be part of the string.
function palindrome(str) {
	let trim = str.match(/\w/gi);
	return trim.join(' ') === trim.reverse().join(' ');
}
//or
function palindrome(str) {
	let noSpace = str.split(' ').join('');
	let result = '';
	for (let i = noSpace.length; i >= 0; i -= 1) {
		result += noSpace.charAt(i);
	}
	return (result === str) ? true : false;
}
console.log(palindrome('racecar'));