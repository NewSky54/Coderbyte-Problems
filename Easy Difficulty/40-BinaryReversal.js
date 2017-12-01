// Using the JavaScript language, have the function BinaryReversal(str) take the str parameter being passed, which 
// will be a positive integer, take its binary representation, reverse that string of bits, and then finally return 
// the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 
// 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the 
// decimal version of this string, which is 244. 
function binaryReversal(str){
    let num = parseInt(str, 10).toString(2); //convert str to binary
    while(num.length % 8){num = '0' + num} //add leading zeroes to make blocks of bytes
    let rev = num.split('').reverse().join(''); //reverse the binary number
    return parseInt(rev, 2); //convert to decimal and return 
}
console.log(binaryReversal("4567"));