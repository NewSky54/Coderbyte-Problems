// Using the JavaScript language, have the function LargestPair(num) take the num parameter being passed and determine 
// the largest double digit number within the whole number. For example: if num is 4759472 then your program should 
// return 94 because that is the largest double digit number. The input will always contain at least two positive digits. 
function largestPair(num) {
    let output = 0;
    let str = num.toString();
    for (let i = 0; i < str.length - 1; i += 1) {
        let test = str.slice(i, i + 2);
        if (test > output) {output = test}
    }
    return output;
}
console.log(largestPair(27));