// Have the function LetterCapitalize(str) take the str parameter being passed and capitalize the first 
// letter of each word. Words will be separated by only one space.
function letterCapitalize(str) {
	let words = str.split(' ');
	for (let i = 0; i < words.length; i += 1) {
		words[i] = words[i][0].toUpperCase() + words[i].substr(1);
		// console.log(words[i]);
	}
	return words.join(' ');
}
//or
function letterCapitalize(str) {
	return str
		.split(' ')
		.map(words => words[0].toUpperCase().concat(words.slice(1)))
		.join(' ');
}
console.log(letterCapitalize("hello from california!"));