const reverseStr = require("./reverse").reverseStr;

test("reverseStr function exists", () => {
	expect(reverseStr).toBeDefined();
});

test("reverseStr reverses a string", () => {
	expect(reverseStr("abcd")).toEqual("dcba");
});

test("reverseStr reverses a string", () => {
	expect(reverseStr("  efghij")).toEqual("jihgfe  ");
});
