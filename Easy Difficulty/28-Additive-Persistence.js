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