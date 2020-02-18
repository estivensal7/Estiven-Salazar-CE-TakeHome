const anagrams = require("./anagrams.js");

test("anagrams function exists", () => {
	expect(typeof anagrams).toEqual("function");
});

test('"hola" is an anagram of "aloh"', () => {
	expect(anagrams("hola", "aloh")).toBeTruthy();
});

test('"Hey! Hi!" is an anagram of "Hi! Hey!"', () => {
	expect(anagrams("Hey! Hi!", "Hi! Hey!")).toBeTruthy();
});

test('"One One" is not an anagram of "Three three three"', () => {
	expect(anagrams("One One", "Three three three")).toBeFalsy();
});

test('"One one" is not an anagram of "One one c"', () => {
	expect(anagrams("One one", "One one c")).toBeFalsy();
});
