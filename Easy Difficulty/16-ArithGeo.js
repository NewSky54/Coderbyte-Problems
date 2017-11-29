// Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr 
// and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it 
// follows a geometric pattern. If the sequence doesn't follow either pattern return -1.  
// An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric 
// sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] 
// and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered.
function arithGeo(arr) {
    function geo(arr){
        let output = true;
        let test = arr[1] / arr[0];
        for (let i = 1; i < arr.length - 1; i += 1) {
            if (test !== arr[i + 1] / arr[i]) {
                output = false;
            }
        }
        return output;
    }
    function arith(arr) {
        let output = true;
        let test = arr[0] - arr[1];
        for (let i = 1; i < arr.length - 1; i += 1) {
            if (test !== arr[i] - arr[i + 1]) {
                output = false;
            }
        }
        return output;
    }
    return arith(arr) === true ? "Arithmetic" : geo(arr) === true ? "Geometric" : -1;
}
//or

function arithGeo(arr) {
    function geo(arr){
        let test = arr[1] / arr[0];
        return arr.reduce((num, secNum) => (secNum / num !== test ? false : secNum));
    }
    function arith(arr) {
        const test = arr[1] - arr[0];
        return arr.reduce((num, secNum) => (secNum - num !== test ? false : secNum));
    }
    return arith(arr) !== false ? "Arithmetic" : geo(arr) !== false ? "Geometric" : -1;
}
console.log(arithGeo([2, 6, 18, 54]));