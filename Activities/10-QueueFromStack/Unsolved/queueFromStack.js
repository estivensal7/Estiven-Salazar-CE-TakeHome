// --- Directions
// Implement a Queue datastructure using two stacks.
// The Stack implementations are already created for you.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back at the Stack exercise.

// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

class Stack {
	constructor() {
		this.data = [];
	}

	push(record) {
		this.data.push(record);
	}

	pop() {
		return this.data.pop();
	}

	peek() {
		return this.data[this.data.length - 1];
	}
}

class Queue {
	constructor() {
		this.first = new Stack();
		this.second = new Stack();
	}

	add(record) {
		// Write your code here...
	}

	remove() {
		// Write your code here...
	}

	peek() {
		// Write your code here...
	}
}

module.exports = Queue;
