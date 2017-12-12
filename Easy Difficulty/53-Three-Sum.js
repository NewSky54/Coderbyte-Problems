// Using the JavaScript language, have the function ThreeSum(arr) take the array of integers stored in arr, and 
// determine if any three distinct numbers (excluding the first element) in the array can sum up to the first 
// element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1] then there are actually three sets of 
// triplets that sum to the number 8: [2, 1, 5], [4, 5, -1] and [10, -1, -1]. Your program should return the string 
// true if 3 distinct elements sum to the first element, otherwise your program should return the string false. 
// The input array will always contain at least 4 elements. 
function threeSum(arr) {
    let firVal = arr.shift(); //take out first element in array, store in variable 
    let result = false; //set result to true, only change if 3 distinct elements can sum up to firVal
    arr = arr.sort((a, b) => a - b) //sort arr ascending 

        
    for (let i = 0; i < arr.length - 2; i += 1) { //loop though arr 
        let s = i + 1; //s = start of array + 1
        let e = arr.length - 1; //e = end of array 

        while (s < e) { //Continue as long as the start variable is less than end variable 
             if(arr[s] + arr[e] + arr[i] === firVal){ result = true; break; } //Only enter if all three nums add up to firVal
             else if(arr[s] + arr[e] + arr[i] < firVal){ s++ } //if all three nums add up to less than firVal, increment s
             else{ e-- } //else decrement e
       }//end of while loop
    }
    return result; //return 'true' if 3 distinct elements sum to the first element, otherwise return false
}
console.log(threeSum([8, 2, 1, 4, 10, 5]))