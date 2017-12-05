// Using the JavaScript language, have the function NextPalindrome(num) take the num parameter being passed and 
// return the next largest palindromic number. The input can be any positive integer. For example: if num is 24, then 
// your program should return 33 because that is the next largest number that is a palindrome. 
function nextPalindrome(num){
    let count = num + 1; //Set count to num + 1 as we want to return the next largest number, not the current num passed in. 
    while (count !== Number(count.toString().split('').reverse().join(''))) { //Will return when count equals itself reversed.
        count++ 
    }
    return count;
}
console.log(nextPalindrome(23));
