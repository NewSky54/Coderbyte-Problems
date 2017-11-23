// Have the function WordCount(str) take the str string parameter being passed and return the number of 
// words the string contains (e.g. "Never eat shredded wheat or cake" would return 6). Words will be separated 
// by single spaces.
function wordCount(str) {
	return str.split(' ').length;
}
console.log(wordCount('Never eat shredded wheat or cake hffffi iaorstn r'))