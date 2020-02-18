## 06 - Anagrams

### Directions

-   Utilizing the `buildCharMap()` function from the previously demonstrated code, write an algorithm that checks to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

### Examples

-   anagrams('rail safety', 'fairy tales') --> True
-   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
-   anagrams('Hi there', 'Bye there') --> False

### Hints

-   Initialize 'charMap' variables for each string containing the outputs of the `buildCharMap()` function.
-   Check if the length of each character map is the same as the other... else, return false since this means the strings cannot be anagrams.
