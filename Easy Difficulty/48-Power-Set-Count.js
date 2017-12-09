// Using the JavaScript language, have the function PowerSetCount(arr) take the array of integers stored in arr, 
// and return the length of the power set (the number of all possible sets) that can be generated. For example: 
// if arr is [1, 2, 3], then the following sets form the power set: 
function powerSetCount(arr){
    return Math.pow(2, arr.length);
}
console.log(powerSetCount([1, 2, 3]));