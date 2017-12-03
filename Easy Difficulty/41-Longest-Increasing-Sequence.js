// Using the JavaScript language, have the function LongestIncreasingSequence(arr) take the array of positive integers 
// stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original 
// list where the numbers are in sorted order, from lowest to highest, and are in increasing order. The sequence does 
// not need to be contiguous or unique, and there can be several different subsequences. For example: if arr is 
// [4, 3, 5, 1, 6] then a possible LIS 
// is [3, 5, 6], and another is [1, 6]. For this input, your program should return 3 because that is the length of the 
// longest increasing subsequence. 
function longestIncreasingSequence(arr) {
    let max = 0;
    let lastFound = -1;
    for(let i = 1; i < arr.length; i++) {  
      if(arr[i] > arr[0] && lastFound === -1) {      
        lastFound = arr[i];
        let long = longestIncreasingSequence(arr.slice(i));
        if(long > max) {
          max = long;    
        }
      }
    }
    max+=1;
    return max;
  }
  console.log(longestIncreasingSequence([4, 3, 5, 1, 6]));