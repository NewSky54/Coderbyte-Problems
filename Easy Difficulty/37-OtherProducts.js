// Using the JavaScript language, have the function OtherProducts(arr) take the array of numbers stored in arr and 
// return a new list of the products of all the other numbers in the array for each element. For example: if arr is 
// [1, 2, 3, 4, 5] then the new array, where each location in the new array is the product of all other elements, is 
// [120, 60, 40, 30, 24]. The following calculations were performed to get this answer: [(2*3*4*5), (1*3*4*5), (1*2*4*5), 
// (1*2*3*5), (1*2*3*4)]. You should generate this new array and then return the numbers as a string joined by a 
// hyphen: 120-60-40-30-24. The array will contain at most 10 elements and at least 1 element of only positive integers. 
function otherProducts(arr){
    //Multiply each number in the array against the accumulator, which is the first element in the array. 
    let total = arr.reduce((a, b) => a * b);
    /* Creates a new array with the result of dividing the variable ‘total’ against each number in the array. Then 
    joins the string into an array separated by a dash. */
    return arr.map((val) => total/val).join('-');
}
console.log(otherProducts([1, 2, 3, 4, 5]));
