// Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the 
// string. If there are two or more words that are the same length, return the first word from the string with 
// that length. Ignore punctuation and assume sen will not be empty.
function longestWord(sen) {
	sen = sen.replace(/[^a-zA-Z]/g, ' ');
	arr = sen.split(' ');
	arr.sort(function (a, b) {
		return b.length - a.length;
	});
	return arr[0];
}
console.log(longestWord("Hello!"));