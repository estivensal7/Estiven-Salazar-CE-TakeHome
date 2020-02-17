## 04 - Palindromes

### Directions

In this activity we are still assuming that you are given a string. Complete the 'palindrome()' function using JavaScript's [.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) method so that it returns true if the string is a palindrome or false if it is not. Palindromes are strings that form the same word if it is reversed. _Do_ include spaces and punctuation in determining if the string is a palindrome.

### Examples

-   palindrome("abba") === true
-   palindrome("abcdefg") === false
-   palindrome("hello!") === false
-   palindrome("!jkj!") === true

### Hints

-   The '.every()' function is used to do a boolean check on every element within an array.
-   If any of the boolean checks return false, the final output from the '.every()' method will be 'false'.
-   We need to compare the each element to its coounter-element on the end of the array, for example in the following array:

    `["a", "b", "c", "b", "a"]`

    When we arrive to the first element `"a"` with the '.every()' method, we will compare it to the last element which is also `"a"`. Then move into the second element `"b"`, and compare it to the second to last element which is also `"b"`. Element `"c"` will be compared against itself since it is in the middle of the array. Ultimately, the functions's output will be `True`.
