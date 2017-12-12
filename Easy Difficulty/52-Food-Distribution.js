// Using the JavaScript language, have the function FoodDistribution(arr) read the array of numbers stored in arr 
// which will represent the hunger level of different people ranging from 0 to 5 (0 meaning not hungry at all, 5 
// meaning very hungry). You will also have N sandwiches to give out which will range from 1 to 20. The format of 
// the array will be [N, h1, h2, h3, ...] where N represents the number of sandwiches you have and the rest of 
// the array will represent the hunger levels of different people. Your goal is to minimize the hunger difference 
// between each pair of people in the array using the sandwiches you have available. 

// For example: if arr is [5, 3, 1, 2, 1], this means you have 5 sandwiches to give out. You can distribute them in 
// the following order to the people: 2, 0, 1, 0. Giving these sandwiches to the people their hunger levels now become: 
// [1, 1, 1, 1]. The difference between each pair of people is now 0, the total is also 0, so your program should 
// return 0. 
// Note: You may not have to give out all, or even any, of your sandwiches to produce a minimized difference. 

// Another example: if arr is [4, 5, 2, 3, 1, 0] then you can distribute the sandwiches in the following order: 
// [3, 0, 1, 0, 0] which makes all the hunger levels the following: [2, 2, 2, 1, 0]. The differences between each 
// pair of people is now: 0, 0, 1, 1 and so your program should return the final minimized difference of 2. 

function foodDistribution(arr) {
    let san = arr.shift();
    let diff = 0;
    let where = null;
    let result = 0;

    
    for (let i = 0; i < arr.length; i++) {//loop to iterate over arr and provide sandwiches to the biggest differences
        if (arr[i] - arr[i + 1] > diff) {//test to get biggest difference 
            diff = arr[i] - arr[i + 1];//'diff' will equal the biggest difference 
            where = i;//'where' will equal which index has the biggest difference
        }
        if (where !== null && san >= 1) {
            if (diff > san) {diff = san}
            arr[where] -= diff;
            san -= diff;
            diff = 0;
            where = null;
        }
    }
    if (diff === 0) {//test if there is no better alternative than the array in current form
        return 0;
    }

    for (let j = 0; j < arr.length - 1; j++) {
        result += arr[j] - arr[j + 1];
    }
    return result;
}
console.log(foodDistribution([4, 5, 2, 3, 1, 0]));