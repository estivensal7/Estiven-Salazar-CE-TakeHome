// --- Description
// Using the starter code below complete the 'front()', 'isEmpty()', and 'printQueue()' functions.
// Remember, the queue should be a class with methods 'add', 'remove', 'front', 'isEmpty', and 'printQueue'.
// Adding to the queue should store an element until it is removed.

// --- Examples
//     const q = new Queue();
//     q.isEmpty(); // returns true;
//     q.add(1);
//     q.add(2);
//     q.add(3);
//     q.isEmpty(); // returns false;
//     q.front(); // returns 3;
//     q.printQueue(); // returns ;
//     q.remove(); // returns 1;

//IMPORTANT - Make sure you are returning your outputs. For the printQueue() method, return the queue as a string with no spaces.

class Queue {
	constructor() {
		this.data = [];
	}

	add(record) {
		this.data.unshift(record);
	}

	remove() {
		return this.data.pop();
	}

	printQueue() {
		var str = "";
		for (var i = 0; i < this.data.length; i++) str += this.data[i] + "";
		return str;
	}

	isEmpty() {
		return this.data.length == 0;
	}

	front() {
		if (this.isEmpty()) return "No elements in Queue";
		return this.data[0];
	}
}

module.exports = Queue;
