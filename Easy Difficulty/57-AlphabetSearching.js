// Using the JavaScript language, have the function AlphabetSearching(str) take the str parameter being passed and 
// return the string true if every single letter of the English alphabet exists in the string, otherwise return the 
// string false. For example: if str is "zacxyjbbkfgtbhdaielqrm45pnsowtuv" then your program should return the string 
// true because every character in the alphabet exists in this string even though some characters appear more than once.
function alphabetSearching(str){
    let obj = {};
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(/[a-z]/i.test(str[i])) obj[str[i]] = true;
    }
    for (const key in obj) {
        if(obj[key] = true) count++;
    }
   return (count === 26) ? true: false;
}
console.log(alphabetSearching("abcdefghijklmnopqrstuvwxyyyy"));
// Output:"false"