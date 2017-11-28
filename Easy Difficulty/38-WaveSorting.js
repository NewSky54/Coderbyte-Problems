/* Using the JavaScript language, have the function WaveSorting(arr) take the array of positive integers stored in 
arr and return the string true if the numbers can be arranged in a wave pattern: a1 > a2 < a3 > a4 < a5 > ..., 
otherwise return the string false. For example, if arr is: [0, 1, 2, 4, 1, 4], then a possible wave ordering of the 
numbers is: [2, 0, 4, 1, 4, 1]. So for this input your program should return the string true. The input array will 
always contain at least 2 elements. More examples are given below as sample test cases.  */
function waveSorting(arr) {
    let len = arr.length;

    let obj = {};
    arr.forEach(val => {
        (!obj[val])? obj[val] = 1: obj[val] += 1; 
    });

    let output = [];
    for(let key in obj){
       output.push(obj[key]); 
    }
    let maxNum = Math.max(...output);
    return (maxNum > len/2 ? false : true);
}
console.log(waveSorting([2, 0, 4, 1, 4, 1, 1, 1]));