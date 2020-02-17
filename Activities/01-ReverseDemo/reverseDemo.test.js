const reverseDemo = require("./reverseDemo.js");

test("reverseDemo function exists", () => {
	expect(reverseDemo).toBeDefined();
});

test("reverseDemo reverses a string", () => {
	expect(reverseDemo("abcd")).toEqual("dcba");
});

test("reverseDemo reverses a string", () => {
	expect(reverseDemo("hello!")).toEqual("!olleh");
});
