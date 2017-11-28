// Using the JavaScript language, have the function RectangleArea(strArr) take the array of strings stored in strArr, which will only 
// contain 4 elements and be in the form (x y) where x and y are both integers, and return the area of the rectangle formed by the 4 
// points on a Cartesian grid. The 4 elements will be in arbitrary order. For example: if strArr is ["(0 0)", "(3 0)", "(0 2)", 
// "(3 2)"] then your program should return 6 because the width of the rectangle is 3 and the height is 2 and the area of a rectangle 
// is equal to the width * height. 
function rectangleArea(strArr){
	//Store all integers inside the array of strings into sub-arrays, each containing two integers.
	let points = strArr.map(function(point){
		return point.match(/\d+/g);
	});
	//Find max and mins of all the pairs.
	let minX = points.map(point => point[0]).sort()[0];
	let maxX = points.map(point => point[0]).sort().reverse()[0];

	let minY = points.map(point => point[1]).sort()[0];
	let maxY = points.map(point => point[1]).sort().reverse()[0];

	//Find the Area by multiplying the length by width after finding the difference between Max and min X/Y. 
	return (maxX - minX) * (maxY - minY);
}
console.log(rectangleArea(["(0 0)", "(3 0)", "(0 2)", "(3 2)"]));