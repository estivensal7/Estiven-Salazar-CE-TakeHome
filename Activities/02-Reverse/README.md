## 02 - Reverse

### Directions

In this activity we are still assuming that you are given a string. Complete the 'reverseStr' function utilizing the JavaScript [.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method so that it returns a new string with the reversed order of characters.

### Examples

-   reverse('juice') === 'eciuj'
-   reverse('hello') === 'olleh'
-   reverse('Great!') === '!taerG'

### Hints

-   The reduce method is used to take all of the different values in an array, and condense them down to one value.
-   Make sure you are converting the string into an array of its characters.
-   .reduce() takes in two argument.. the first is an arrows function. The second argument is a starting value, which in our case we can set as an empty string.

## Bonus

### Directions

If you complete the reverseStr() algorithm, please attempt the reverseInt() algorithm. In the reverseInt() function, write an algorithm where given an integer, return an integer that is the reverse ordering of the numbers. Please keep in mind that there are many more edge-cases we have to account for in this algorithm compared to the reverseStr() algorithm.

### Examples

-   reverse(25) === 52
-   reverse(213) === 312
-   reverse(700) === 7
-   reverse(-31) === -13
-   reverse(-70) === -7

### Hints

-   Convert the integer into a string, and use your already completed reverseStr() algorithm. However, make sure you are ultimately returning an integer.
-   Utitlize JavaScript's [Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign) function when determining whether the output will be positive, or negative.
