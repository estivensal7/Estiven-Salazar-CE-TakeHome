const palindrome = require("./palindromes.js");

test("palindrome function is defined", () => {
	expect(typeof palindrome).toEqual("function");
});

test('"aca" is a palindrome', () => {
	expect(palindrome("aca")).toBeTruthy();
});

test('" aca" is not a palindrome', () => {
	expect(palindrome(" aca")).toBeFalsy();
});

test('"aca " is not a palindrome', () => {
	expect(palindrome("aca ")).toBeFalsy();
});

test('"hello" is not a palindrome', () => {
	expect(palindrome("hello")).toBeFalsy();
});

test('"1000000001" a palindrome', () => {
	expect(palindrome("1000000001")).toBeTruthy();
});

test('"pennep" a palindrome', () => {
	expect(palindrome("pennep")).toBeTruthy();
});
