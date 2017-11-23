// Have the function LetterCountI(str) take the str parameter being passed and return the first word with 
// the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return 
// greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no
//  words with repeating letters return -1. Words will be separated by spaces.
function LetterCountI(str) {
	let words = str.split(' ');
	let containWord = {};
	let result = { word: null, num: 1 };
	for (let i = 0; i < words.length; i++) {
		let word = words[i];
		containWord[word] = {};
		containWord[word]['hightest'] = 1;
		for (let j = 0; j < word.length; j++) {
			let letter = word[j];
			containWord[word][letter] === undefined
				? (containWord[word][letter] = 1)
				: (containWord[word][letter] += 1);
			if (containWord[word][letter] > containWord[word]['hightest']) {
				containWord[word]['hightest'] = containWord[word][letter];
			}
		} //end of letter loop
	} //end of word loop
	for (let key in containWord) {
		if (containWord[key]['hightest'] > result['num']) {
			// console.log(key)
			result['num'] = containWord[key]['hightest'];
			result['word'] = key;
		} //end of if
	} //end of for in
	return result['num'] === 1 ? -1 : result['word'];
} //end
LetterCountI("a happy mannn");