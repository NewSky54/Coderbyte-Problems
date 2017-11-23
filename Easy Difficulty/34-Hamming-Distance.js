// Using the JavaScript language, have the function HammingDistance(strArr) take the array of strings stored in strArr, which will only 
// contain two strings of equal length and return the Hamming distance between them. The Hamming distance is the number of positions 
// where the corresponding characters are different. For example: if strArr is ["coder", "codec"] then your program should return 1. 
// The string will always be of equal length and will only contain lowercase characters from the alphabet and numbers. 
function hammingDistance(strArr) {
	let word1 = strArr[0], word2 = strArr[1];
	let counter = 0;
	for (let i = 0; i < word1.length; i += 1) {
		if (word1[i] !== word2[i]) {
			counter++;
		}
	}
	return counter;
}
console.log(hammingDistance(["coder", "codec"]));