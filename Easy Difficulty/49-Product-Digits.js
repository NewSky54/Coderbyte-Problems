// Using the JavaScript language, have the function ProductDigits(num) take the num parameter being passed which will 
// be a positive integer, and determine the least amount of digits you need to multiply to produce it. For example: 
// if num is 24 then you can multiply 8 by 3 which produces 24, so your program should return 2 because there is a 
// total of only 2 digits that are needed. Another example: if num is 90, you can multiply 10 * 9, so in this case 
// your program should output 3 because you cannot reach 90 without using a total of 3 digits in your multiplication. 
function productDigits(num) {
    let values = []; //array to store numbers that multiplied together equal num
    for (let i = num - 1; i >= 0; i-=1) { //for loop decrementing starting at num - 1
        if(num % i === 0){ //enter only if the reminder of num being divided by i equals zero
            let divide = num/i; //find number that when multiplied with i equals num 
            values.push(i.toString() + divide.toString())//push i and divide to array after converting to Strings
        }
    }
    let sorted = values.sort((a,b) => a - b); //sort array ascending 
    return values[0].length;//return the length of the smallest num in array 
}
console.log(productDigits(90));