// Have the function VowelCount(str) take the str string parameter being passed and return the number of 
// vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for 
// this challenge.
function vowelCount(str) {
	let vowels = str.match(/a|e|i|o|u/gi);
	return vowels ? vowels.length : 0;
}
console.log(vowelCount("All cows eat grass and moo"));