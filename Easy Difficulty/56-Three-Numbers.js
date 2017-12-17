// Using the JavaScript language, have the function ThreeNumbers(str) take the str parameter being passed and 
// determine if exactly three unique, single-digit integers occur within each word in the string. The integers can 
// appear anywhere in the word, but they cannot be all adjacent to each other. 
// If every word contains exactly 3 unique integers somewhere within it, then return the string true, otherwise return 
// the string false. 
// For example: if str is "2hell6o3 wor6l7d2" then your program should return "true" but if the string is "hell268o 
// w6or2l4d" then your program should return "false" because all the integers are adjacent to each other in the first word.
function threeNumbers(str){
    //determine if exactly three unique, single-digit integers occur within each word in the string, 
    let arr = str.split(' ');
    let result = true;

    arr.forEach((val, ind, arr) => {
        if(/\d\d\d/g.test(val)) {//test for three adjacent nums
            result = false;
        }
        let nums = val.replace(/\D/g, '');
        if(nums.length !== 3){//test for amount of nums. Has to be three. 
            result = false;
        }
        let newSet = [...nums]//Spreads is the best
        if(newSet[0] === newSet[1] || newSet[0] === newSet[2] || newSet[1] === newSet[2]){//test for repeating nums.
            result = false;
        }
    });
    return result;
}
console.log(threeNumbers("23b5 w1o2rl3d g1g3g92"));