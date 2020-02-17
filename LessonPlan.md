## Lesson Plan - JavaScript Algorithms & Data Structures

### Overview

#### Instructor Priorities

#### Instructor Notes

### Class Objectives

### 1. Instructor Do: Welcome Students (5 minutes)

### 2. Everyone Do: Students Share Responses (5 minutes)

### 3. Instructor Do: Review Big O Notation (10 minutes)

### 4. Everyone Do: Review & Set up Jest (10 minutes)

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

    **Directions**

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

### 9. Groups Do: 04-Palindromes (15 minutes)

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
    -   We need to compare the each element to its coounter-element on the end of the array, for example in the following array:

        ```
        ["a", "b", "c", "b", "a"]
        ```

    -   When we arrive to the first element `"a"` with the '.every()' method, we will compare it to the last element which is also `"a"`. Then move into the second element `"b"`, and compare it to the second to last element which is also `"b"`. Element `"c"` will be compared against itself since it is in the middle of the array. Ultimately, the functions's output will be `True`.

### 10. Instructor Do: Review 04-Palindromes (10 minutes)

-   Open up `Activities/04-Palindromes/Solved/palindromes.js`
-   Ask the students if they would like to share how they solved the activity.
-   Make sure to take some time to explain the '.every()' method to the students while utilizing the diagram in the presentation slides.
-   Emphasize how before we can utilize the '.every()' method we need to convert the given string into an array.
-   The first element passed into '.every()' is an arrow function that will be called for every element in the array.
-   'char' represents the value of the current character from the array we are iterating through.
-   'i' represents the index of the current character from the array we are iterating through.'
-   _IMPORTANT_ ~~ Ask students which of the two Palindrome algorithms they believe is more efficient. Explain to them that in the second algorithm we are iterating twice through the same array, as opposed to the first one where we only iterate through it once. Ultimately, it's important for them to understand how the additional steps that our second algorithm has to take, affects the overall efficiency of it.

### 11. Instructor Demo: 05-AnagramsDemo (5 minutes)

### 12. Groups Do: 06-Anagrams (15 minutes)

-   Have students complete the following task:

    **Instructions**


    _Examples_



    _Hints_

### 13. Instructor Do: Review 06-Anagrams (10 minutes)

-   Open up `Activities/06-Anagrams/Solved/anagrams.js`

### 14. BREAK (35 minutes)

### 15. Instructor Demo: Activity #4 (5 minutes)

### 16. Students Do: Activity #4 (20 minutes)

### 17. Instructor Do: Review Activity #4 (10 minutes)

### 18. Instructor Demo: Activity #5 (5 minutes)

### 19. Students Do: Activity #5 (20 minutes)

### 20. Instructor Do: Review Activity #5 (10 minutes)

### 21. Everyone Do: Reflect On The Day(10 minutes)

### 22. End Class (0 minutes)
