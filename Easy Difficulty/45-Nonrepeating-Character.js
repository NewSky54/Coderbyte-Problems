// Using the JavaScript language, have the function NonrepeatingCharacter(str) take the str parameter being passed, 
// which will contain only alphabetic characters and spaces, and return the first non-repeating character. 
// For example: if str is "agettkgaeee" then your program should return k. The string will always contain at least one 
// character and there will always be at least one non-repeating character. 
function nonRepeatingCharacter(str){
    let result;
    let letters = {};
    for (let i = 0; i < str.length; i++) {
        (!letters[str[i]]) ? letters[str[i]] = 1 : letters[str[i]] += 1
    }
    for(let key in letters){
        if(letters[key] === 1){
            return result = key;
        }
    }
    return result;
}
console.log(nonRepeatingCharacter('aaaaabbbbbcppkcccccddddddeeeeefffffff'));