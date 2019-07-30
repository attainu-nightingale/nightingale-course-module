# List of Coding Challenges

## Week 3

### Day 1: Login page using Bootstrap

Create a login page using bootstrap which looks like the below screenshot

![bootstrap login page](images/bootstrap-login-page.png)

### Day 2: Looping through an array

Given the following array: 
```
var players = [
    { name: "Roger Federer", rank: 1 },
    { name: "Rafel Nadal", rank: 2 },
    { name: "Nalbandian", rank: 12 },
    { name: "Andy Murray", rank: 14 },
    { name: "Andy Roddick", rank: 4 },
    { name: "Pete Sampras", rank: 3 },
    { name: "Rod Laver", rank: 190 },
    { name: "Andre Agassi", rank: 11 },
    { name: "Novak Djokovic", rank: 5 },
    { name: "Arthur Ashe", rank: 8 },
];
```
Write a `for` loop that only prints players with rank less than or equal to 10.

### Day 3: Find initials of a name

Write a JavaScript function which accepts a name and prints the initials.

Input: `Mahendra Singh Dhoni`
Output: `MSD`

Input: `Shah Rukh Khan`
Output: `SRK`

### Day 5: Compare two arrays

Write a JavaScript function that compares two arrays and prints whether they are equal or not.

> **Note:** Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal. In other words, two arrays are equal if they contain the same elements in the same order.

----------
## Week 4

### Day 1: Star pattern

Write a JavaScript function that produces a star pattern likes this.

```
*
**
***
****
*****
****
***
**
*
```

> **Hint:** Nested `for` loop.

### Day 2: Hamming distance

Write a program to find the Hamming distance between two strings.

> **Note:**  Hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

The Hamming distance between:

1. "karolin" and "kathrin" is 3.
2. "karolin" and "kerstin" is 3.
3. 1011101 and 1001001 is 2.
4. 2173896 and 2233796 is 3.

### Day 4: Ajax

First, load [cities.json](data/cities.json) using Ajax (either vanilla JavaScript or jQuery is fine).

Then write a Javascript function that takes a letter and finds all the cities that starts with that letter.

----------
## Week 5

### Day 1: Ajax 2

Use data from the file [cities.json](data/cities.json) to
create a function which takes a state as input and loops through the data to output the cities that belong to that state.

### Day 2: Formatting time
Write a function that takes a number input in seconds and returns the number of hours, minutes and seconds as output. Separate the number of hours, minutes and seconds with colons `:`.

```
Input: 126
Output: "0:2:6"

Input: 45
Output: "0:0:45"

Input: 3700
Output: "1:1:40"
```