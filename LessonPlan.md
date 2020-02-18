## Lesson Plan - JavaScript Algorithms & Data Structures

### Overview

In this class we will be introducing students to the fundamental concepts of algorithms and data structures. We will begin class by reviewing the concepts of Big O notation, and setting up our testing environment. It will be a challenging class for some students. Remind them every chance you get that working algorithms, and data structures is all about practice. The more that they work with these concepts, the easier they will be able to not only understand other algorithms, but to also tackle problems in their own code.

#### Instructor Priorities

-   Students should be able to define what an `algorithm` is.

-   Students should be able to define what `data structures` are.

-   Students should understand that we use Big O notation when determining the time complexity of an algorithm. However, they are not expected to memorize the differences between the several time complexities by the end of class.

-   Students should understand that we are just scratching the surface of algorithms & data structures in today's activities. However, understanding these fundamentals will make it easier for them to enhance their technical interviewing skills.

#### Instructor Notes

-   Have your TAs refer to the [TimeTracker](./TimeTracker.md) to stay on task.

-   [Visual Go](https://visualgo.net/en) is a great location to visualize many popular algorithms, and data structures!

-   [Queue & Stack Visualization](https://visualgo.net/en/list)

### Class Objectives

-   Students should be able to define what an `algorithm` is.

-   Students should be able to define what `data structures` are.

-   Students should understand what Big O notation is, and how we can identify which complexity matches their algorithm.

### 1. Instructor Do: Welcome Students (5 minutes)

-   Discuss today's objectives with the students.

-   Advise students that today might be a bit of a challenging yet FUN day.

-   Have the students research the following questions:
    -   What is an algorithm?
    -   What is a data structure?
    -   How can you determine if one algorithm is better than another?
    -   Why should Developers learn to implement algorithms?

### 2. Everyone Do: Students Share Responses (5 minutes)

-   Have students share their responses to the questions.

-   Discuss your own answers to the questions with the students.

### 3. Instructor Do: Review Big O Notation (10 minutes)

-   Discuss the following questions with students:

    -   What is runtime complexity?

        -   Runtime complexity is a term that we use to describe how performant an algorithm is.
        -   We use runtime complexity to compare different solutions for solving a given problem.

    -   Why do we need to understand runtime complexity?
        -   Many times in technical interviews, the interviewer will ask what the runtime complexity of your solution will be.
        -   It's best to be able to identify a possible runtime complexity for our solution, as it shows just how much of an understanding we have of our solution, and the given problem.

-   Feel free to demonstrate the given examples in the presentation slides to the students.

### 4. Everyone Do: Review & Set up Jest (10 minutes)

In today's class we will be using Jest to run our test cases. All of the testing code is already implemented into the activities so there is no need for editing any of the testing code.

Explain to students the concept of running test cases. At the moment there is no need to explain the test cases line by line to the students.

_Most importantly_ explain to students how we can run our test cases using jest! This will be very important since it will serve as an easy way for them to determine the completion, and efficiency of their code.

If you are not familiar with Jest, please feel free to review the documentation beforehand. [Jest Docs](https://jestjs.io/docs/en/getting-started)

Getting started with Jest:

-   We first need to import Jest via npm by running an `npm install --save-dev jest`. In our case, Jest is already added to the package.json file so a simple `npm install` will suffice.

-   Next, we need to include jest as a property of our package.json file, and set the 'testEnvironment' to 'node' like so:

          {
              "name": "Activities",
              "version": "1.0.0",
              "description": "",
              "main": "index.js",
              "scripts": {
                  "test": "echo \"Error: no test specified\" && exit 1"
              },
              "jest": {
                  "testEnvironment": "node"
              },
              "keywords": [],
              "author": "",
              "license": "ISC"
          }

-   In order to run our test cases, we must specify the path of the file containing our test cases, and provide it to Jest in the command line. For example, `jest 01-ActivityOne/activityOne.test.js --watch`

-   By adding the --watch flag, Jest will keep the test suite open for us. It might be best for students to run the test cases, and keep the suite open while they solve the activities. You can refresh the test cases by pressing `Enter` in the CLI.

-   Ensure that the students set up their environment properly by running `npm install`, and running the first test cases in 01-ReverseDemo, `jest 01-ReverseDemo/reverseDemo.test.js --watch`.

-   Remind them that for every new activity we will have to pass in the appropriate path to Jest.

### 5. Instructor Do: 01-ReverseDemo (5 minutes)

-   Have students explain how they might go about reversing a string.
-   After explaining the demo code, advise students that this example is just one way in which we can reverse a string. There are many other ways to complete the same function. Remind them to not be discouraged if in the following activities, their code looks different from their peers' or the solutions'.
-   Make sure to run the test cases when demonstrating how all of the code passes.

### 6. Groups Do: 02-Reverse (20 minutes)

-   Have students complete the following task:

    **Instructions**

    -   In this activity we are still assuming that you are given a string. Complete the 'reverseStr' function utilizing the JavaScript [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method so that it returns a new string with the reversed order of characters. Make sure you are running the test cases when checking your code!

    _Examples_

    -   reverse('juice') === 'eciuj'
    -   reverse('hello') === 'olleh'
    -   reverse('Great!') === '!taerG'

    _Hints_

    -   The reduce method is used to take all of the different values in an array, and condense them down to one value.
    -   Make sure you are converting the string into an array of its characters.
    -   .reduce() takes in two argument.. the first is an arrows function. The second argument is a starting value, which in our case we can set as an empty string.

    **~BONUS~**

    **Instructions**

    -   If you complete the reverseStr() algorithm, please attempt the reverseInt() algorithm. In the reverseInt() function, write an algorithm where given an integer, return an integer that is the reverse ordering of the numbers. Please keep in mind that there are many more edge-cases we have to account for in this algorithm compared to the reverseStr() algorithm.

    _Examples_

    -   reverse(25) === 52
    -   reverse(213) === 312
    -   reverse(700) === 7
    -   reverse(-31) === -13
    -   reverse(-70) === -7

    _Hints_

    -   Convert the integer into a string, and use your already completed reverseStr() algorithm. However, make sure you are ultimately returning an integer.
    -   Utitlize JavaScript's [Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) function when determining whether the output will be positive, or negative.

### 7. Instructor Do: Review 02-Reverse (10 minutes)

-   Open up `Activities/02-Reverse/Solved/reverse.js`
-   Start with the 'reverseStr()' function:

    -   Remind students that before we can use the '.reduce()' method, we first need to split the given string into an array.
    -   Explain that in order to set up the '.reduce()' method in our algorithm, inside of it we need to pass in an arrow function and an empty string as the two arguments.
    -   Whenever .reduce() runs, it's going to take the empty string argument, and pass it as the first argument of the callback function. We will name this first argument in the callback function, 'reversed'.
    -   Whatever gets returned from that inner-function will be then used as the starting argument for every successive run of the callback function.
    -   In total, the function runs one time for every element in the array.
    -   The second argument is the element/character that we are currently operating on out of our array. We'll receive that value as an argument called 'character'.
    -   With each iteration we will take the current value of 'character' and add it to the beginning of the current 'reversed' argument's value.
    -   Show students how we can condense the same code that we wrote into the following:

    ```
    function reverseStr(str) {
    return str.split('').reduce((rev, char) => char + rev, '');}
    ```

    -   "Understanding how we can condense our code will help to impress your interviewer, and demonstrate that you have a solid comprehension of the algorithm you wrote."

-   If you have enough time explain the solution to the reverseInt() algorithm:

    -   Explain to students reversing an integer involves many more edge-cases than reversing a string.
    -   We need to account for the following:
        -   negative vs. positive integers
        -   reversing an integer ending with zeroes
        -   negative integers which end with zeroes
    -   We begin by initializing a temporary array which we will utilize for our '.reduce()' method, 'tempArray'.
    -   Remind students that we already learned how to reverse a string. By converting the integer to a string, we can manipulate the position of the characters accordingly.
    -   Lastly, explain how the Math.sign() function takes in an integer, and returns a +/-1 based on the value of the integer.
    -   In our algorithm, we are multiplying our 'reversed' variable's value by the output of 'Math.sign(n)'.

-   Congratulate the students on completing this first activity! Some of them may feel discouraged, and lost at this time, but ensure them that algorithms are all about practice!

### 8. Instructor Demo: 03-PalindromesDemo (5 minutes)

-   Have students explain how they might write an algorithm that checks if a string is a palindrome.
-   Explain the demo code line by line to the students.
-   Emphasize how even though we just created our own '.reverse()' algorithm in the last activity, JavaScript has its own built-in methods that operate in the same manner and we can utilize them when building other algorithms.
-   Make sure you are running the test cases when checking your code!

### 9. Groups Do: 04-Palindromes (20 minutes)

-   Have students complete the following task:

    **Instructions**

    -   In this activity we are still assuming that you are given a string. Complete the 'palindrome()' function using JavaScript's [.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method so that it returns true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. _Do_ include spaces and punctuation in determining if the string is a palindrome. Make sure you are running the test cases when checking your code!

    _Examples_

    -   palindrome("abba") === true
    -   palindrome("abcdefg") === false
    -   palindrome("hello!") === false
    -   palindrome("!jkj!") === true

    _Hints_

    -   The '.every()' function is used to do a boolean check on every element within an array.
    -   If any of the boolean checks return false, the final output from the '.every()' method will be 'false'.
    -   We need to compare the each element to its mirror-element on the end of the array, for example in the following array:

        ```
        ["a", "b", "c", "b", "a"]
        ```

    -   When we arrive to the first element `"a"` with the '.every()' method, we will compare it to the last element which is also `"a"`. Then move into the second element `"b"`, and compare it to the second to last element which is also `"b"`. Element `"c"` will be compared against itself since it is in the middle of the array. Ultimately, the function's output will be `True`.

### 10. Instructor Do: Review 04-Palindromes (10 minutes)

-   Open up `Activities/04-Palindromes/Solved/palindromes.js`
-   Ask the students if they would like to share how they solved the activity.
-   Make sure to take some time to explain the '.every()' method to the students while utilizing the diagram in the presentation slides.
-   Emphasize how before we can utilize the '.every()' method we need to convert the given string into an array.
-   The first element passed into '.every()' is an arrow function that will be called for every element in the array.
-   'char' represents the value of the current character from the array we are iterating through.
-   'i' represents the index of the current character from the array we are iterating through.'
-   _IMPORTANT_ ~~ Ask students which of the two Palindrome algorithms they believe is more efficient. Explain to them that in the second algorithm we are iterating twice through the same array, as opposed to the first one where we only iterate through it once. Ultimately, it's important for them to understand how the additional steps that our second algorithm has to take, affects the overall efficiency of it.

### 11. Instructor Demo: 05-CharMap (5 minutes)

-   Review the activity with students line by line.
-   Explain to students the concept of building out character maps, and how we can utilize character maps for several different algorithms.
-   Make sure you demonstrate the outputs of the code in your terminal by running the command `node charMap.js`

### 12. Groups Do: 06-Anagrams (20 minutes)

-   Have students complete the following task:

    **Instructions**

    -   Utilizing the `buildCharMap()` function from the previously demonstrated code, write an algorithm that checks to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

    _Examples_

    -   anagrams('rail safety', 'fairy tales') --> True
    -   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
    -   anagrams('Hi there', 'Bye there') --> False

    _Hints_

    -   Initialize 'charMap' variables for each string containing the outputs of the `buildCharMap()` function.
    -   Check if the length of each character map is the same as the other... else, return false since this means the strings cannot be anagrams.

### 13. Instructor Do: Review 06-Anagrams (10 minutes)

-   Open up `Activities/06-Anagrams/Solved/anagrams.js`
-   Review the code line by line with the students.
-   Emphasize the importance of building a helper function such like the `buildCharMap()` function when keeping your code neat and organized.
-   Explain how by utilizing JavaScript's `Object.keys()` method we can isolate the keys in each charMap, and grab its length. _If the lengths are different, the two strings cannot be anagrams_
-   Explain how we can use a for-in loop to iterate through an object's keys. In our case, we are comparing the value of the current key in the first object against its value in the second object.
-   As long as the two conditional statements are false, both strings are anagrams of each other!

### 14. BREAK (35 minutes)

### 15. Instructor Demo: 07-QueueDemo (5 minutes)

-   Review the activity with students line by line.
-   Explain the concept of queues utilizing the diagrams in the presentation slides.

### 16. Students Do: 08-Queue (15 minutes)

-   Have students complete the following task:

    **Instructions**

    -   Using the starter code provided to you, complete the 'front()', 'isEmpty()', and 'printQueue()' functions. Remember, the queue should be a class with methods 'add', 'remove', 'front', 'isEmpty', and 'printQueue'. Adding to the queue should store an element until it is removed.

    _Examples_

    -   const q = new Queue();
    -   q.isEmpty(); // returns true;
    -   q.add(1);
    -   q.add(2);
    -   q.add(3);
    -   q.isEmpty(); // returns false;
    -   q.front(); // returns 3;
    -   q.printQueue(); // returns ;
    -   q.remove(); // returns 1;

    _Hints_

    -   _IMPORTANT_ - Make sure you are returning your outputs. For the printQueue() method, return the queue as a string with no spaces.

### 17. Instructor Do: Review 08-Queue (10 minutes)

-   Open up `Activities/08-Queue/Solved/queue.js`
-   Review the code line by line with the students.
-   Students may be wondering, why they would need to ever use a queue instead of an array. Explain to them that the main reasons we use a queue are when an interviewer requests us to build a queue from scratch, or if we ever want to limit an array's properties for optimization in our code.
-   Make sure you run the test cases, and show students how we can test our methods!

### 18. Instructor Demo: 09-Stack (5 minutes)

-   Review the activity with students line by line.
-   Explain the concept of stacks utilizing the diagrams in the presentation slides.

### 19. Students Do: 10-QueueFromStack (20 minutes)

-   Have students complete the following task:

    **Instructions**

    -   Implement a Queue datastructure using two stacks.
    -   The Stack implementations are already created for you.
    -   _Do not_ create an array inside of the 'Queue' class.
    -   Queue should implement the methods 'add', 'remove', and 'peek'.
    -   For a reminder on what each method does, look back at the Stack exercise.

    _Examples_

    -   const q = new Queue();
    -   q.add(1);
    -   q.add(2);
    -   q.peek(); - returns 1
    -   q.remove(); - returns 1
    -   q.remove(); - returns 2

    _Hint_

    -   Utilize `while-loops` to keep track of the `.peek()` methods, and ensuring that there are still values in the Stacks!

### 20. Instructor Do: Review 10-QueueFromStack (10 minutes)

-   Open up `Activities/10-QueueFromStack/Solved/queueFromStack.js`
-   Explain the code to the students line by line.
-   In order to grab our first record from Stack A, we are going to pop every record from StackA and push it into StackB one at a time.
-   When we peek into StackA, and it is empty.. this means that our last pushed record into StackB is the record that we want to return.
-   Before we return our record from StackB, we want to pop this record, then push our records in StackB back into StackA one at a time.
-   Now we are all done, and ready to return the original record that was popped out of StackB.

### 21. Everyone Do: Reflect On The Day(5 minutes)

GREAT JOB! Today you may have came across several difficult questions, and it's completely ok to be exhausted from all of this problem-solving. Reflect with the class on the following topics:

-   How much do we understand about algorithms & data structures?
-   How can we compare the efficiency of similar algorithms?
-   Can you think of any awesome features you may be able to implement with the skills we learned today?

### 22. End Class (0 minutes)
