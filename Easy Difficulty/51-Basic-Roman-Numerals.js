// Using the JavaScript language, have the function BasicRomanNumerals(str) read str which will be a string of Roman 
// numerals. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000. 
// In Roman numerals, to create a number like 11 you simply add a 1 after the 10, so you get XI. But to create a number 
// like 19, you use the subtraction notation which is to add an I before an X or V (or add an X before an L or C). 
// So 19 in Roman numerals is XIX. 

// The goal of your program is to return the decimal equivalent of the Roman numeral given. For example: if str is 
// "XXIV" your program should return 24.
function basicRomanNumerals(str) {
    let arr = str.split('');
    //empty array to push elements too and add together
    let output = [];
    //for loop and if statements to test and assign each value in string to a number
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'I') {
            output.push(1);
        }
        if (arr[i] === 'V') {
            output.push(5);
        }
        if (arr[i] === 'X') {
            output.push(10);
        }
        if (arr[i] === 'L') {
            output.push(50);
        }
        if (arr[i] === 'C') {
            output.push(100);
        }
        if (arr[i] === 'D') {
            output.push(500);
        }
        if (arr[i] === 'M') {
            output.push(1000);
        }
    }//end of first loop
    for (let j = 0; j < output.length; j++) {
        if (output[j] < output[j + 1]) {output.splice(j, 2, output[j + 1] - output[j])}
    }
    return output.reduce((acc, cur) => acc + cur);//Adds elements in output together 
}
console.log(basicRomanNumerals('XVIX'))  