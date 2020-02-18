// Run this program by navigating to it in terminal/bash.
// Then run node charMap.js

//Here we are building a 'Character Map'. This function will return an object containing each character in the given string as its keys.
//The value of each key will be the number of times each character appears in the string.

function buildCharMap(str) {
	const charMap = {}; //  initializing a variable to hold the character map object

	// iterating through the string, removing all punctuation and spaces using RegEx, and settiing all letters to lowercase
	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		charMap[char] = charMap[char] + 1 || 1; // if the current character appears as a key in charMap, add 1 to its value. Else, set the character as a key, and set its value as 1.
	}

	return charMap; // return the final charMap object
}

console.log(buildCharMap("hello"));
console.log(buildCharMap("Pineapples!"));
console.log(buildCharMap("Hello, how are you?"));
