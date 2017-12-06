// Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers 
// (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is 
// [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. 
// Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears 
// in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11 
// If there are no two numbers that sum to the first element in the array, return -1 
function twoSum(arr) { //O(n²) Solution
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

function twoSum(arr){ //Average complexity of O(n) solution
    let output = [];
    let hashTable = {};
    let val = arr.shift();
    for(let i = 0; i<arr.length; i+=1){
        let sum = val - arr[i];
        (hashTable[sum] !== undefined) ? output.push(sum, arr[i]) : hashTable[arr[i]] = arr[i];
    }
    return output.join(' ');
}
console.log(twoSum([7, 3, 5, 2, -4, 8, 11]));








