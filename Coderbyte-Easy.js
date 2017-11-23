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
// console.log(firstReverse("Hello Codesmith!"));

// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of 
// it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the 
// input will always be an integer.
function firstFactorial(num) {
	let result = 1;
	for (let i = 1; i <= num; i++) {
		result *= i;
	}
	return result;
}
console.log(firstFactorial(8));

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

// Have the function SimpleAdding(num) add up all the numbers from 1 to num. For example: if the input is 
// 4 then your program should return 10 because 1 + 2 + 3 + 4 = 10. For the test cases, the parameter num will 
// be any number from 1 to 1000.
function SimpleAdding(num) {
	let acc = 0;
	for (let i = num; i >= 0; i--) {
		acc += i;
	}
	return acc;
}
console.log(SimpleAdding(8));

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

// Create a function findDuplicate(str) that takes the str parameter being passed in and returns out the 
// dupicate words.
function findDuplicate(str) {
	let wordsArr = str.split(/[^a-z]/);
	let sorted = wordsArr.sort();
	let results = [];

	for (let i = 0; i < sorted.length - 1; i += 1) {
		if (sorted[i] === sorted[i + 1]) {
			results.push(sorted[i]);
		}
	}
	return results.join(' ');
}
// console.log(findDuplicate('redux, array, hello, object, hello, hello, array, folder, redux'));

//using objects
function findDuplicates(str) {
	let words = str.split(' ').sort();
	let results = [];
	let cache = {};

	for (let i = 0; i < words.length - 1; i += 1) {
		if (words[i] === words[i + 1]) {
			cache[words[i]] = 0;
		}
	}
	// console.log(cache)
	for (let key in cache) {
		results.push(key);
	}
	return results.join(' ');
}
// console.log(findDuplicates('redux array hello object hello hello array folder redux'));

// Have the function SimpleSymbols(str) take the str parameter being passed and determine if it is an 
// acceptable sequence by either returning the string true or false. The str parameter will be composed of + 
// and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each 
// letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be 
// empty and will have at least one letter.
function simpleSymbols(str) {
	if (/^[a-zA-Z]/.test(str) || /[a-zA-Z]$/.test(str)) {
		return false;
	} else if (/[^+][a-zA-Z]/.test(str) || /[a-zA-Z][^+]/.test(str)) {
		return false;
	} else {
		return true;
	}
}
console.log(simpleSymbols("+a+st+"));

// Have the function CheckNums(num1,num2) take both parameters being passed and return the string true if 
// num2 is greater than num1, otherwise return the string false. If the parameter values are equal to each other 
// then return the string -1.
function checkNums(num1, num2) {
	if (num2 === num1) {
		return '-1';
	} else {
		return num2 > num1;
	}
}
//or using ternary operator (shortcut for 'if' statements)
function checkNums(num1, num2) {
	return num2 === num1 ? '-1' : num2 > num1;
}
console.log(checkNums(10, 1));

// Have the function TimeConvert(num) take the num parameter being passed and return the number of hours 
// and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number 
// of hours and minutes with a colon.
function timeConvert(num) {
	let hours = Math.floor(num / 60);
	let min = num % 60;
	let time = hours + ':' + min;
	return time;
}
//or
function timeConvert(num) {
	return Math.floor(num / 60) + ':' + num % 60;
}
console.log(timeConvert(63));

// Have the function AlphabetSoup(str) take the str string parameter being passed and return the string with 
// the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not 
// be included in the string.
function alphabetSoup(str) {
	return str.toLowerCase().split('').sort().join('');
}
console.log(alphabetSoup('Hello from Earth'))

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

// Have the function VowelCount(str) take the str string parameter being passed and return the number of 
// vowels the string contains (ie. "All cows eat grass and moo" would return 8). Do not count y as a vowel for 
// this challenge.
function vowelCount(str) {
	let vowels = str.match(/a|e|i|o|u/gi);
	return vowels ? vowels.length : 0;
}
console.log(vowelCount("All cows eat grass and moo"));

// Have the function WordCount(str) take the str string parameter being passed and return the number of 
// words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated 
// by single spaces.
function wordCount(str) {
	return str.split(' ').length;
}
console.log(wordCount('Never eat shredded wheat or cake hffffi iaorstn r'))

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

// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr 
// and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it 
// follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence 
// is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each 
// term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and 
// Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered,
function ArithGeo(arr) {
	if (isAri(arr) !== false) {
		return 'Arithmetic';
	}
	if (isGeo(arr) !== false) {
		return 'Geometric';
	}
	return -1;
}
function isAri(arr) {
	const diff = arr[1] - arr[0];
	return arr.reduce(
		(num, next) => (next - num !== diff || arr.length === 1 ? false : next)
	);
}

function isGeo(arr) {
	const ratio = arr[1] / arr[0];
	return arr.reduce(
		(num, next) => (next / num !== ratio || arr.length === 1 ? false : next)
	);
}
console.log(ArithGeo([3]));

// Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored 
// in arr and return the string true if any combination of numbers in the array can be added up to equal the
// largest number in the array, otherwise return the string false. For example: if arr contains 
// 4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, 
// will not contain all the same elements, and may contain negative numbers.
function ArrayAdditionI(arr) {
	function sumChecker(arr, sum, length) {
		if (sum === 0) {
			return true;
		}
		if (sum !== 0 && length === 0) {
			return false;
		}
		return (
			sumChecker(arr, sum, length - 1) ||
			sumChecker(arr, sum - arr[length - 1], length - 1)
		);
	}
	let max = Math.max.apply(null, arr);
	arr.splice(arr.indexOf(max), 1);
	let x = arr.length;

	return sumChecker(arr, max, x);
}
console.log(ArrayAdditionI([2, 3, 5]));

// Have the function LetterCountI(str) take the str parameter being passed and return the first word with 
// the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return 
// greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no
//  words with repeating letters return -1. Words will be separated by spaces.
function LetterCountI(str) {
	let words = str.split(' ');
	let containWord = {};
	let result = { word: null, num: 1 };
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		containWord[word] = {};
		containWord[word]['hightest'] = 1;
		for (let j = 0; j < word.length; j++) {
			let letter = word[j];
			containWord[word][letter] === undefined
				? (containWord[word][letter] = 1)
				: (containWord[word][letter] += 1);
			if (containWord[word][letter] > containWord[word]['hightest']) {
				containWord[word]['hightest'] = containWord[word][letter];
			}
		} //end of letter loop
	} //end of word loop
	for (let key in containWord) {
		if (containWord[key]['hightest'] > result['num']) {
			// console.log(key)
			result['num'] = containWord[key]['hightest'];
			result['word'] = key;
		} //end of if
	} //end of for in
	return result['num'] === 1 ? -1 : result['word'];
} //end
LetterCountI("a happy mannn");

// Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored 
// in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For 
// example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98. The array will not be empty and 
// will contain at least 2 numbers. It can get tricky if there's just two numbers!
function secondGreatLow(arr) {
	let sorted = arr
		.sort((a, b) => a - b)
		.filter((elem, ind, ar) => arr.indexOf(elem) === ind);
	return sorted.length < 2
		? sorted[0] + ' ' + sorted[1]
		: sorted[1] + ' ' + sorted[sorted.length - 2];
	// console.log(sorted)
}
console.log(secondGreatLow([7, 106]));

// Using the JavaScript language, have the function DivisionStringified(num1,num2) take both parameters 
// being passed, divide num1 by num2, and return the result as a string with properly formatted commas. 
// If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). 
// For example: if num1 is 123456789 and num2 is 10000 the output should be "12,346".
function divisionStringified(num1, num2) {
	let str = Math.round(num1 / num2).toString();
	if (str.length > 3) {
		arr = str.split('');
		for (let i = str.length - 3; i > 0; i -= 3) {
			arr.splice(i, 0, ',');
		}
		return arr.join('');
	} else {
		return str;
	}
}
console.log(divisionStringified(500, 20));

// Using the JavaScript language, have the function CountingMinutesI(str) take the str parameter being 
// passed which will be two times (each properly formatted with a colon and am or pm) separated by a hyphen 
// and return the total number of minutes between the two times. The time will be in a 12 hour clock format. 
// For example: if str is 9:00am-10:00am then the output should be 60. If str is 1:00pm-11:00am the output 
// should be 1320.
function countingMinutesI(str) {
	let nums = str.match(/([am]|[pm])+/g);
	let arr = str.split('-').map(item => item.split(':')).map(item => {
		// console.log(item);
		item[1] = item[1].slice(0, item[1].length - 2);
		return item;
	});

	const hour1 = nums[0] === 'pm' ? +arr[0][0] + 12 : +arr[0][0];
	const hour2 = nums[1] === 'pm' ? +arr[1][0] + 12 : +arr[1][0];
	const min1 = +arr[0][1];
	const min2 = +arr[1][1];

	let diff = hour2 * 60 + min2 - (hour1 * 60 + min1);
	return diff;
}
countingMinutesI('1:00pm-4:00am');

// Using the JavaScript language, have the function MeanMode(arr) take the array of numbers stored in arr 
// and return 1 if the mode equals the mean, 0 if they don't equal each other (ie. [5, 3, 3, 3, 1] should 
// return 1 because the mode(3) equals the mean(3)).The array will not be empty, will only contain
// positive integers, and will not contain more than one mode.
function meanMode(arr) {
	let len = arr.length;
	function mean(arr) {
		let count = 0;
		for (let i = 0; i < len; i += 1) {
			count += arr[i];
		}
		return count / len;
	}

	function mode(arr) {
		let table = {};
		let answer = { num: null, count: 0 };
		for (let i = 0; i < len; i += 1) {
			let num = arr[i];
			(table[num] === undefined) ? table[num] = 1 : table[num] += 1;
		}
		for (let key in table) {
			if (table[key] > answer['count']) {
				answer['count'] = table[key];
				answer['num'] = key;
			}
		}
		return answer.num;
	}
	return mode(arr) == mean(arr) ? 1 : 0;
}
meanMode([4, 4, 4, 6, 2]);
// meanMode([1, 3, 3, 3, 5]);

// Using the JavaScript language, have the function dashInsert(str) insert dashes ('-') between each two 
// odd numbers in str. For example: if str is 454793 the output should be 4547-9-3. Don't count zero as an 
// odd number. 
function dashInsert(str) {
	let arr = str.split('');
	for (let i = 0; i < arr.length - 1; i += 1) {
		if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0) {
			arr[i] += '-';
		}
	}
	return arr.join('');
}
console.log(dashInsert('77993'));

// Using the JavaScript language, have the function SwapCase(str) take the str parameter and swap the case 
// of each character. For example: if str is "Hello World" the output should be hELLO wORLD. Let numbers and 
// symbols stay the way they are. 
function swapCase(str) {
	let arr = str.split('');
	for (let i = 0; i < arr.length; i += 1) {
		(arr[i].match(/[a-z]/)) ?
			arr[i] = arr[i].toUpperCase() :
			arr[i] = arr[i].toLowerCase();
	}
	return arr.join('');
}
console.log(swapCase('Hell%#* World'));

// Using the JavaScript language, have the function NumberSearch(str) take the str parameter, search for all 
// the numbers in the string, add them together, then return that final number. For example: if str is 
// "88Hello 3World!" the output should be 91. You will have to differentiate between single digit numbers and 
// multiple digit numbers like in the example above. So "55Hello" and "5Hello 5" should return two different 
// answers. Each string will contain at least one letter or symbol. 
function numberSearch(str) {
	let counter = 0;
	let match = str.match(/(\d{1,})/g);
	for (let i = 0; i < match.length; i += 1) {
		counter += Number(match[i]);
	}
	return counter;
}
console.log(numberSearch('88Hello 3World!'));

// Using the JavaScript language, have the function ThirdGreatest(strArr) take the array of strings stored 
// in strArr and return the third largest word within in. So for example: if strArr is ["hello", "world", 
// "before", "all"] your output should be world because "before" is 6 letters long, and "hello" and "world" are 
// both 5, but the output should be world because it appeared as the last 5 letter word in the array. If strArr 
// was ["hello", "world", "after", "all"] the output should be after because the first three words are all 5 
// letters long, so return the last one. The array will have at least three strings and each string will only 
// contain letters. 
function thirdGreatest(strArr) {
	let sorted = strArr.sort((a, b) => b.length - a.length)
	return sorted;
}
console.log(thirdGreatest(["hello", "world", "before", "all"]))

// Using the JavaScript language, have the function PowersofTwo(num) take the num parameter being passed 
// which will be an integer and return the string true if it's a power of two. If it's not return the string 
// false. For example if the input is 16 then your program should return the string true but if the input is 22 
// then the output should be the string false. 
function PowersofTwo(num) {
	if (num === 1) {
		return true;
	} else {
		return (num % 2 === 0) ? PowersofTwo(num / 2) : false;
	}
}
//or
function PowersofTwo(num) {
	return (num === 1) ? true : (num % 2 === 0) ? PowersofTwo(num / 2) : false;
}
console.log(PowersofTwo(8));

function flattenDeep(arr) {
	return Array.isArray(arr) ? [].concat(...arr.map(flattenDeep)) : arr;
}
// console.log(flattenDeep([1, [2, 3, [4]], 5]));

// Using the JavaScript language, have the function AdditivePersistence(num) take the num parameter being 
// passed which will always be a positive integer and return its additive persistence which is the number of 
// times you must add the digits in num until you reach a single digit. For example: if num is 2718 then your 
// program should return 2 because 2 + 7 + 1 + 8 = 18 and 1 + 8 = 9 and you stop at 9. 
function AdditivePersistence(num) {
	let arr = num.toString().split('');
	let times = 0;

	if (arr.length > 1) {
		arr.forEach(val => times += parseInt(val));
		return 1 + AdditivePersistence(times);
	}
	return 0;
}
console.log(AdditivePersistence(2718));

// Using the JavaScript language, have the function MultiplicativePersistence(num) take the num parameter 
// being passed which will always be a positive integer and return its multiplicative persistence which is the 
// number of times you must multiply the digits in num until you reach a single digit. For example: if num is 39 
// then your program should return 3 because 3 * 9 = 27 then 2 * 7 = 14 and finally 1 * 4 = 4 and you stop at 4. 
function MultiplicativePersistence(num) {
	let arrNums = num.toString().split('');
	let counter = 1;
	const item = new Array();

	if (arrNums.length > 1) {
		arrNums.forEach(val => {
			return counter *= parseInt(val);
		});
		return 1 + MultiplicativePersistence(counter);
	}//end of if
	return 0
}
console.log(MultiplicativePersistence(27));

// Using the JavaScript language, have the function OffLineMinimum(strArr) take the strArr parameter being passed 
// which will be an array of integers ranging from 1...n and the letter "E" and return the correct subset based on 
// the following rules. The input will be in the following format: ["I","I","E","I",...,"E",...,"I"] where the I's stand for 
// integers and the E means take out the smallest integer currently in the whole set. When finished, your program should 
// return that new set with integers separated by commas. For example: if strArr is ["5","4","6","E","1","7","E","E","3","2"] 
// then your program should return 4,1,5. 
function offLineMinimum(strArr) {
	let result = [], nums = [];
	for (const item of strArr) {
		if (item === "E") {
			result.push(nums.shift());
		} else {
			nums.push(parseInt(item));
			nums.sort((a, b) => a - b);
		}
	}
	return result.join(',');
}
console.log(offLineMinimum(["1", "3", "2", "E", "E"]));

// Using the JavaScript language, have the function ChangingSequence(arr) take the array of numbers stored in arr and return the 
// index at which the numbers stop increasing and begin decreasing or stop decreasing and begin increasing. For example: if arr is 
// [1, 2, 4, 6, 4, 3, 1] then your program should return 3 because 6 is the last point in the array where the numbers were increasing 
// and the next number begins a decreasing sequence. The array will contain at least 3 numbers and it may contains only a single 
// sequence, increasing or decreasing. If there is only a single sequence in the array, then your program should return -1. Indexing 
// should begin with 0.
function changingSequence(arr) {
	let increasing = arr[1] > arr[0];
	for (let i = 2; i < arr.length - 1; i += 1) {
		let seq = arr[i] < arr[i + 1];
		if (seq !== increasing) {
			return i;
		}
	}
	return -1;
}
console.log(changingSequence([1, 2, 4, 6, 4, 3, 1]));

// Using the JavaScript language, have the function OverlappingRanges(arr) take the array of numbers stored in arr which will contain 
// 5 positive integers, the first two representing a range of numbers (a to b), the next 2 also representing another range of integers 
// (c to d), and a final 5th element (x) which will also be a positive integer, and return the string true if both sets of ranges 
// overlap by at least x numbers. For example: if arr is [4, 10, 2, 6, 3] then your program should return the string true. The first 
// range of numbers are 4, 5, 6, 7, 8, 9, 10 and the second range of numbers are 2, 3, 4, 5, 6. The last element in the array is 3, and 
// there are 3 numbers that overlap between both ranges: 4, 5, and 6. If both ranges do not overlap by at least x numbers, then your 
// program should return the string false. 
function overLappingRanges(arr) {
	let count = 0;
	for (let i = arr[0]; i < arr[1]; i += 1) {
		if (i >= arr[2] && i <= arr[3]) {
			count++;
		}
	}
	return count >= arr[4] ? true : false;
}
//or
function overLappingRanges(arr) {
	let target = arr.pop();
	let lowerBound = Math.max(arr[0], arr[2])
	let upperBound = Math.min(arr[1], arr[3])
	let result = upperBound - lowerBound + 1;
	return result >= target;
}
console.log(overLappingRanges([4, 10, 2, 6, 3]));

// Using the JavaScript language, have the function Superincreasing(arr) take the array of numbers stored in arr and determine 
// if the array forms a superincreasing sequence where each element in the array is greater than the sum of all previous elements. 
// The array will only consist of positive integers. For example: if arr is [1, 3, 6, 13, 54] then your program should return the 
// string "true" because it forms a superincreasing sequence. If a superincreasing sequence isn't formed, then your program should 
// return the string "false".
function superIncreasing(arr) {
	for (let i = 0; i < arr.length; i += 1) {
		added += arr[i];
		if (added < arr[i]) {
			return false;
		}
	}
	return true;
}
console.log(superIncreasing([1, 7, 6, 13, 54]));

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

// Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only 
// contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 
// points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", "(3 2)"] 
// then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle is equal 
// to the width * height. 
// function rectangleArea(strArr){

// }
// console.log(rectangleArea());

function binaryReversal(str) {
	//convert to binary
	let bin = Number(str).toString(2);
	// reverse the binary number
	let rev = bin.split("").reverse().join("");
	//convert binary to int
	let res = parseInt(rev, 2);

	return res;
}
// console.log(binaryReversal('546'));

// function twoSum(arr) {
// 	//store first var = arr[0] which will be our test case.
// 	let sum = arr[0];

// 	//empty arr to store pairs
// 	let output = [];

// 	//iterate over arr to find arr[i] + arr[j] = sum. If so, then push pair output.
// 	for (let i = 1; i < arr.length; i += 1) {
// 		for (let j = i + 1; j < arr.length; j += 1) {
// 			if (sum === arr[i] + arr[j]) {
// 				output.push([arr[i], arr[j]]);
// 			}
// 		}
// 	}
// 	// return [].concat(...output);
//     return (output.length === 0) ? -1: output.join(' ');
// } 


function twoSum(arr) { 
	let sum = arr[0];
	let output = [];
    for(let i = 1; i<arr.length; i+=1){
		for(let j = i + 1; j<arr.length; j+=1){
			if(sum === arr[i] + arr[j]){
				output.push([arr[i], arr[j]]);
            }
        }
    }
	return (output.length === 0) ? -1: output.join(' ');
}
console.log(twoSum([17, 4, 5, 6]));



