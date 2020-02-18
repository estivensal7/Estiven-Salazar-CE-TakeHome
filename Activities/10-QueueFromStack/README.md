## 10 - QueueFromStack

### Directions

-   Implement a Queue datastructure using two stacks.
-   The Stack implementations are already created for you.
-   _Do not_ create an array inside of the 'Queue' class.
-   Queue should implement the methods 'add', 'remove', and 'peek'.
-   For a reminder on what each method does, look back at the Stack exercise.

### Examples

-   const q = new Queue();
-   q.add(1);
-   q.add(2);
-   q.peek(); - returns 1
-   q.remove(); - returns 1
-   q.remove(); - returns 2

### Hint

-   Utilize `while-loops` to keep track of the `.peek()` methods, and ensuring that there are still values in the Stacks!
