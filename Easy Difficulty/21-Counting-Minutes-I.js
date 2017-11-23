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