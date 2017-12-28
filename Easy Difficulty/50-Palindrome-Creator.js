// Using the JavaScript language, have the function PalindromeCreator(str) take the str parameter being passed and 
// determine if it is possible to create a palindromic string of at least 3 characters by removing 1 or 2 characters. 
// For example: if str is "abjchba" then you can remove the characters jc to produce "abhba" which is a palindrome. 
// For this example your program should return the two characters that were removed with no delimiter and in the order 
// they appear in the string, so jc. If 1 or 2 characters cannot be removed to produce a palindrome, then return the 
// string not possible. If the input string is already a palindrome, your program should return the string palindrome. 

// The input will only contain lowercase alphabetic characters. Your program should always attempt to create the longest 
// palindromic substring by removing 1 or 2 characters (see second sample test case as an example). The 2 characters 
// you remove do not have to be adjacent in the string. 

// Hint: Try looping through the string and removing every character to see if it produces a palindrome. Then you 
// can also try and remove different pairs of letters within the string as well.
function palindromeCreator(str) {
    //if statement to check if str is already a Palindrome
    if (str === str.split('').reverse().join('')) { return 'Palindrome' }
    
    //Remove one letter 
    for (let i = 0; i < str.length; i++) {
        const letter = str.slice(0, i) + str.slice(i + 1);
        // console.log(str.slice(0, i) + i + str.slice(i + 1))//Great way to visualized whats being removed
        if (letter === letter.split('').reverse().join('')) {
          return str[i];
        }
    }
    //Remove two letters
    for (let i = 0; i < str.length; i++) {
        const letter = str.slice(0, i) + str.slice(i + 1);
        for (let j = i; j < letter.length; j++) {
            const twoLetters = letter.slice(0, j) + letter.slice(j + 1);
            if(twoLetters === twoLetters.split('').reverse().join('')){ 
                return str[i] + letter[j];
            }
        }
    }
    //if palindrome does not exist, return 'not possible'
    return 'not possible';
}
console.log(palindromeCreator('raccecar'))