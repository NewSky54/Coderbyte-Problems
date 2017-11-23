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