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
//or using ternary
function checkNums(num1, num2) {
	return num2 === num1 ? '-1' : num2 > num1;
}
console.log(checkNums(10, 1));