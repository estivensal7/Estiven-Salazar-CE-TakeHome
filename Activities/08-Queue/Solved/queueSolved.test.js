const Queue = require("./queue.js");

test("Queue is a class", () => {
	expect(typeof Queue.prototype.constructor).toEqual("function");
});

test("can add elements to a queue", () => {
	const q = new Queue();
	expect(() => {
		q.add(1);
	}).not.toThrow();
});

test("can remove elements from a queue", () => {
	const q = new Queue();
	expect(() => {
		q.add(1);
		q.remove();
	}).not.toThrow();
});

test("Order of elements is maintained", () => {
	const q = new Queue();
	q.add(1);
	q.add(2);
	q.add(3);
	expect(q.remove()).toEqual(1);
	expect(q.remove()).toEqual(2);
	expect(q.remove()).toEqual(3);
	expect(q.remove()).toEqual(undefined);
});

test("printQueue() method prints all elements", () => {
	const q = new Queue();
	q.add(1);
	q.add(2);
	q.add(3);
	expect(q.printQueue()).toEqual("321");
});

test("front() method prints first element", () => {
	const q = new Queue();
	q.add(1);
	q.add(2);
	q.add(3);
	expect(q.front()).toEqual(3);
});

test("isEmpty() method prints true if there are no elements in queue", () => {
	const q = new Queue();
	expect(q.isEmpty()).toBeTruthy;
});

test("isEmpty() method prints false if there are elements in queue", () => {
	const q = new Queue();
	q.add(1);
	q.add(2);
	q.add(3);
	expect(q.isEmpty()).toBeFalsy;
});
