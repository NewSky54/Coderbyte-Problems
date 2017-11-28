// Using the JavaScript language, have the function BitwiseOne(strArr) take the array of strings stored in strArr, which will only 
// contain two strings of equal length that represent binary numbers, and return a final binary string that performed the bitwise 
// OR operation on both strings. A bitwise OR operation places a 0 in the new string where there are zeroes in both binary strings, 
// otherwise it places a 1 in that spot. For example: if strArr is ["1001", "0100"] then your program should return the string "1101".
function bitwiseOne(strArr) {
    let output = "";
    for (let i = 0; i < strArr[0].length; i += 1) {
            if(strArr[0].charAt(i) === '0' && strArr[1].charAt(i) === '0'){
                output += '0'; 
            }else{
                output += '1'; 
            }
    }
    return output;
}
// or
function bitwiseOne(strArr){
    let num1 = parseInt(strArr[0], 2);
    let num2 = parseInt(strArr[1], 2);

    return (num1 | num2).toString(2);
}
console.log(bitwiseOne(["100", "001"]))
