// Using the JavaScript language, have the function BitwiseTwo(strArr) take the array of strings stored in strArr, 
// which will only contain two strings of equal length that represent binary numbers, and return a final binary string 
// that performed the bitwise AND operation on both strings. A bitwise AND operation places a 1 in the new string 
// where there is a 1 in both locations in the binary strings, otherwise it places a 0 in that spot. For example: 
// if strArr is ["10111", "01101"] then your program should return the string "00101" 
function bitwiseTwo(strArr){
    let output =  '';
    for (let i = 0; i < strArr[0].length; i+=1) {
        if(strArr[0][i] === '1' && strArr[1][i] === '1'){
            output += "1";
        }else{
            output += "0";
        }
    }
    return output;
}
//or
function bitwiseTwo(strArr){
    let num1 = parseInt(strArr[0], 2);
    let num2 = parseInt(strArr[1], 2);

    return (num1 & num2).toString(2);
}
console.log(bitwiseTwo(["110111", "101101"]));
