// Using the JavaScript language, have the function PrimeTime(num) take the num parameter being 
// passed and return the string true if the parameter is a prime number, otherwise return the string 
// false. The range will be between 1 and 2^16. 
function primeTime(num) {
	let result = true;
	for (let i = 2; i < num; i += 1) {
		if (num % i === 0) {
			return false;
		}
	}
	return result;
}
// console.log(primeTime(3));


//Using the JavaScript language, have the function RunLength(str) take the str parameter being passed 
//and return a compressed version of the string using the Run-length encoding algorithm. 
//This algorithm works by taking the occurrence of each repeating character and outputting that number 
//along with a single character of the repeating sequence. For example: "wwwggopp" would return 3w2g1o2p. 
//The string will not contain any numbers, punctuation, or symbols. 
function runLength(str) {
	let resultObj = {};
	str.split("").forEach(function (val, ind, arr) {
		resultObj.hasOwnProperty(val) ? resultObj[val] += 1 : resultObj[val] = 1;
	});//end of forEach
	let resultStr = "";
	for (let key in resultObj) {
		resultStr += resultObj[key] + key;
	}
	return resultStr;
}//end

// console.log(runLength("wwwggopp"));