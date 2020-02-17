// -- Directions --
// Write a function utilizing the JavaScript .reduce() method that returns a new string with the reversed order of characters.

// -- Examples --
// reverse('juice') === 'eciuj'
// reverse('hello') === 'olleh'
// reverse('Great!') === '!taerG'

function reverseStr(str) {
	return str.split("").reduce((reversed, character) => {
		return character + reversed;
	}, "");
}

// ~~ BONUS ~~
// -- Directions --
// In the reverseInt() function, write an algorithm where given an integer, return an integer that is the reverse ordering of the numbers. Please keep in mind that there are many more edge-cases we have to account for in this algorithm compared to the reverseStr() algorithm.

// -- Examples --
// reverse(25) === 52
// reverse(213) === 312
// reverse(700) === 7
// reverse(-31) === -13
// reverse(-70) === -7

function reverseInt(n) {
	const tempArray = n.toString().split("");

	const reversedInt = tempArray.reduce((reversed, character) => {
		return character + reversed;
	}, "");

	return parseInt(reversedInt) * Math.sign(n);
}

module.exports = {
	reverseStr,
	reverseInt
};
