// Have the function LetterChanges(str) take the str parameter being passed and modify it using the following 
// algorithm. Replace every letter in the string with the letter following it in the alphabet 
// (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and 
// finally return this modified string.
function letterChanges(str) {
	let convert = str.replace(/[a-zA-Z]/g, function (char) {
		return char === 'z' || char === 'Z'
			? 'a'
			: String.fromCharCode(char.charCodeAt() + 1);
	});
	let cap = convert.replace(/[a|e|i|o|u]/g, function (char) {
		return char.toUpperCase();
	});
	return cap;
}
console.log(letterChanges("Hello!"));