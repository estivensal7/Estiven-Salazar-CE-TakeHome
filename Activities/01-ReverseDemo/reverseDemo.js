// -- Directions --
// Given a string, return a new string with the reversed order of characters

// -- Examples --
//   reverse('juice') === 'eciuj'
//   reverse('hello') === 'olleh'
//   reverse('Great!') === '!taerG'

function reverseDemo(str) {
	let reversed = "";

	for (let character of str) {
		reversed = character + reversed;
	}

	return reversed;
}

module.exports = reverseDemo;
