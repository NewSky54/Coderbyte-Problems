// Have the function ExOh(str) take the str parameter being passed and return the string true if there is 
// an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered 
// in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return 
// false because there are 6 x's and 5 o's.
function exOh(str) {
	let xCount = str.match(/x/gi);
	let oCount = str.match(/o/gi);
	// console.log(xCount);
	return xCount.length === oCount.length ? true : false;
}
console.log(exOh('xoooxxxooxo'))