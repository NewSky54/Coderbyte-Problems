// Have the function ABCheck(str) take the str parameter being passed and return the string true if the 
// characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" 
// would result in true because there is exactly three characters between a and b). Otherwise return the string 
// false.
function ABCheck(str) {
	return /[aA](...)[bB]/.test(str);
}
//or
function ABCheck(str) {
	return /[aA].{3}[bB]/.test(str);
}
console.log(ABCheck('lank borrowed'));