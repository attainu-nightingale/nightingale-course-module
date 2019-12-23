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

**Note:** Two arrays are considered equal if both arrays contain the same number of elements, and all corresponding pairs of elements in the two arrays are equal. In other words, two arrays are equal if they contain the same elements in the same order.

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

**Hint:** Nested `for` loop.

### Day 2: Hamming distance

Write a program to find the Hamming distance between two strings.

**Note:**  Hamming distance between two strings of equal length is the number of positions at which the corresponding characters are different. In more technical terms, it is a measure of the minimum number of changes required to turn one string into another.

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

### Day 4: Express CRUD

Create an Express application that has routes for creating, adding, updating and deleting a person's contact information - 

```
{
    name: "Name",
    phone: "phone-no"
}
```

### Day 5: URL parameter extraction

Write a function to take a url as a string input and extract all url parameters from it. Return an object contaning these key-value pairs.

```
Input: "http://localhost:3000/add?num1=5&num2=3"
Output: { "num1": 5, "num2": 3 }

Input: "http://localhost:3000/search"
Output: "Missing URL parameters!"
```

----------
## Week 6

### Day 2: Anagram

Given 2 strings, find whether one is an anagram of the other.

**Note:** Two strings are anagrams if they are written using the same exact letters. Each letter should have the same count in both strings. e.g. 'binary' and 'brainy'

### Day 4: Palindrome

Write a function to check whether a given string is a palindrome.

**Note:** A palindrome is a word that is the same when read backwards. e.g. `kayak`, `madam`, `malayalam`

### Day 5: Character increment

Write a function to take a string as input and change each letter to the next letter in the alphabet.

```
Input: "hello"
Output: "ifmmp"

Input: "zeta"
Output: "afub"
```

----------
## Week 7

### Day 2: Factorial

Write  a function to take a number input and output its factorial.

**Note:** The factorial of any number is the product of all positive integers less than or equal to it. Factorial is mathematically denoted by the symbol `!`.

```
4! = 4 * 3 * 2 * 1 = 24

6! = 6 * 5 * 4 * 3 * 2 * 1 = 720
```

### Day 3: Pangram

Given a string, find all characters that are missing from the string, i.e., the characters that can make the string a pangram. Print the output in alphabetic order, case-insensitive.

**Note:** A pangram is a sentence containing every letter in the English alphabet.

```
Input : The quick brown fox jumps
Output : adglvyz
```

### Day 5: Decimal to binary

Write a function to input a decimal (base-10) number and return its binary equivalent (base-2). The image below illustrates the method to get a binary equivalent `10001` of a decimal number `17`.

![conversion](images/decimal-binary.png)

----------
## Week 8

### Day 1: Fibonacci

Write a function to take an input n and print first n terms of the Fibonacci series.

**Note:** The Fibonacci Sequence is the series of numbers - `0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...` Any term of the Fibonacci series is found by adding up the two numbers before it.

### Day 2: Triangle pattern

Given a number N, the task is to print the following pattern:
```
Input: 10
Output:                    
          * 
         * * 
        * * * 
       * * * * 
      * * * * * 
     * * * * * * 
    * * * * * * * 
   * * * * * * * * 
  * * * * * * * * * 
 * * * * * * * * * * 

Input: 5
Output:
     * 
    * * 
   * * * 
  * * * * 
 * * * * * 
```

### Day 3: Array min-max

Create two Javascript functions - `largest` and `smallest`.

Both of them takes an array of numbers as an input.

`largest` should return the largest number in the array.
`smallest` should return the smallest number in the array.

Feel free to use any technique - either algo based or any of the JS' builtin feature to solve this problem.

### Day 4: Check for power of 2

Create a Javascript function that checks if a number is a power of two.

For a number that is power of two, you should return `true`. For others, you should return `false`.
Examples: `isPowerOfTwo(16)` => `true`, `isPowerOfTwo(9) => `false`

*Hint:* You can easily check if a number is power of two by - repeatedly dividing it by two and checking for any remainder - until the number becomes 1 or less. If at any point the remainder is not 0, the number is not a power of two.


# Week 12

## Day 5

Write a Javascript function that takes two arrays as an input and calculate the number of elements that belong to both of the arrays.

For example, given two arrays - `let a =[5,2,8,9,4]` and let b = `[3,2,9,5]`` The function commonElements(a, b) should return `[]2, 5, 9]` because 2, 5 and 9 are common to both of the arrays.

# Week 13

## Day 5

Consider the following rule for creating a number sequence -
If the `previous number is even, the next number is n / 2`.
If the `previous number is odd, the next number is 3 * n + 1`
If we use the above rule and start the sequence from 13, we will have the `following sequence 13, 40, 20, 10, 5, 16, 8, 4, 2, 1`
This is how it was created -
We started from 13, which is an odd number.
So the next number is calculated as 3 * n + 1, that is, 3 * 13 + 1 = 40
40 is even, so the next number is n / 2, that is 40 / 2 = 20
20 is even, so the next number is n / 2, that is 20 / 2 = 10
10 is even, so the next number is n / 2, that is 10 / 2 = 5
5 is odd, so the next number is 3 * n + 1, that is 3 * 5 + 1 = 16
and so on until 1... 

# Week 14 

## Day 1

Write a Javascript function that checks if a string contains all unique characters. Return true if all the characters are unique or false if it contains duplicate characters.

For example, ansal contains two a and hence the function should return false for it. arkesh contains no repeated character and hence the function should return true.

You can treat small case and big case of same characters as different characters.

Hint: Use javascript object for storage 

## Day 2 
Write a Javascript function that takes a string and compresses it.

You can use a simple character count algorithm for the compression. So for each character in the input string, replace it with a number if the next character(s) are the same.

So an input string like AAABCCDDDD will become  A3BC2D4.

## Day 4 
Consider two sorted arrays, A and B.

Write a Javascript function that merges these two arrays maintaining the sorted order.

We know that this can be easily achieved using .concat() and then .sort() methods. However, for this problem, you cannot use the .sort() function. Try to do the merge without it.

## Day 5
Write a Javascript function that finds all *permutations of an input string*.

Permutation is the act of arranging the members of a collection into some sequence or order - https://en.wikipedia.org/wiki/Permutation

For example, the input "ABC" to our function would return the following: "ABC", "ACB", "BAC", "BCA", "CBA", and "CAB".

Hints:

1. These kind of problems are well suited for Recursive problem solving.
2. If you are completely stuck, here is a well known algorithm for solving this problem - https://en.wikipedia.org/wiki/Heap%27s_algorithm . Read about the algorithm and try to implement the code by yourself.

# Week 15 

## Day 1

### Challenge 1

2 ^ 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 ^ 1000?

(Read 2 ^ 15 as 2 raise to 15 or simply exponentiation with the base 2).

Hints: `Math` object has a function to find the power. Once you get that, get individual numbers from the result and add them together.

### Challenge 2

Write a Javascript function that finds the missing numbers in an array of integers from 1 to N, where N being the largest number in the array.

Some example inputs and outputs -

findMissing( [1, 2, 4, 5, 6] ) should return [3] as 3 is the missing number in the series.
findMissing( [1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 13, 14, 15] ) should return [8, 10] as both of them are missing the series.

You can assume that the input array does not contain any duplicates. 

## Day 2 

### Challenge 3

Write a Javascript program that removes duplicates from an array.

For example, if the input array is `[1, 2, 2, 3, 4, 5, 6, 6, 7]`, the output of the program should be [1, 2, 3, 4, 5, 6, 7]

You can assume that the input array is sorted. (If this fact is not mentioned in your interview challenge, you can always sort the input array before processing).

Can you do this in O(n) time?

## Day 3

### Challenge 4

Write a Javascript function that finds all prime numbers upto a number n.

So if we call the function asfindPrimes(100), it should print all the prime numbers upto 100.

Hints -

1. You know how to check a number is prime or not. If you know it, doing the same for numbers from 1 to 100 is easy.

2. If you have solved the problem using the first method above, please read about Sieve of Eratosthenes. It is a very efficient way to find all prime numbers upto n. And it is a common interview task to implement the same. Try and see if you can solve the program using that algorithm.

## Day 4

### Challenge 5

Create a Stack class using arrays and ES6 class.

Stack is an ordered data structure that supports two functions - push and pop.push adds an element to a stack, where pop remove from it.

The adding and removal of elements take a special order. The last element added to a stack will be the first element to be removed from it, when called using push and pop respectively.

Hints:You can use an array to represent the stack in your class. Then use the array push/pop or shift/unshift methods to get the element in or out of the array.

## Day 5

### Challenge 6 

I have attached a CSV file here that contains the data for the percentage of computerized schools in each state of India.

Please write a program that reads this file, sort the data based on the percentage in descending order and print the sorted data to the console. So, when you run this program, you will see the state with the maximum computerized school at the top.

The only rule we have here is - To sort the data, use the bubble sort algorithm.

# Week 16 

## Day 2
Write a Javascript function that finds all the number pairs in an array whose sum is equal to a given number.

For example, if `findPairs` is our number, here are some sample calls -

`findPairs(10, [1, 2, 4, 5, 6, 10, 12])` will return `[4, 6]` as adding those two together produces 10.

Remember, we are trying to find all pairs, which means set of two values.

Start brute forcing it to find a N^2 solution. And then see if you can improve it further.

## Day 3 
Suspended 

## Day 4 
An element in a sorted array can be found in O(log n) time via binary search. But suppose we rotate an ascending order sorted array at some pivot unknown to you beforehand. So for instance, 1 2 3 4 5 might become 3 4 5 1 2. Devise a way to find an element in the rotated array in O(log n) time.

## Day 5
Given an array of random numbers, Push all the zero’s of a given array to the end of the array. For example, if the given arrays is {1, 9, 8, 4, 0, 0, 2, 7, 0, 6, 0}, it should be changed to {1, 9, 8, 4, 2, 7, 6, 0, 0, 0, 0}. The order of all other elements should be same. Expected time complexity is O(n) and extra space is O(1).

# Week 17

## Day 1 
Given an array of n distinct elements, the task is to find all elements in array which have at-least two greater elements than themselves.
Input: [2, 8, 7, 1, 5]
Output: 2 , 1,  5 
Solve the above question in O(n) time.  

## Day 2 
Given an array A[] consisting 0s, 1s and 2s. The task is to write a function that sorts the given array. The functions should put all 0s first, then all 1s and all 2s in last.

Input: {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1}
Output: {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2}
Time Complexity: O(n) 

## Day 3
Given a linked list, find the loop inside the linked list

## Day 4 
Reverse a single linked list
Given pointer to the head node of a linked list, the task is to reverse the linked list. We need to reverse the list by changing links between nodes.
Input: Head of following linked list
1->2->3->4->NULL
Output: Linked list should be changed to,
4->3->2->1->NULL

## Day 5 
Given an array, print the Next Greater Element (NGE) for every element. The Next greater Element for an element x is the first greater element on the right side of x in array. Elements for which no greater element exist, consider next greater element as -1.
Input:  [4, 5, 2, 25]
Output:
  4      -->   5
  5      -->   25
  2      -->   25
  25     -->   -1
Time Complexity Required: O(n)
Data structure to use: Stack

# Week 18 

## Day 2 
Given an n x n matrix .In the given matrix, you have to print the elements of the matrix in the snake pattern.
Input :mat[][] = [[10, 20, 30, 40],
                  [15, 25, 35, 45],
                  [27, 29, 37, 48],
                  [32, 33, 39, 50]];
Output : 10 20 30 40 45 35 25 15 27 29
        37 48 50 39 33 32

## Day 3 
Given a boolean 2D array, where each row is sorted. Find the row with the maximum number of 1s.
Input matrix
0 1 1 1
0 0 1 1
1 1 1 1  // this row has maximum 1s
0 0 0 0

Output: 2

## Day 4
Given two binary strings, return their sum (also a binary string).
Input:  a = "11", b = "1"
Output: "100"

## Day 5
A Duck number is a number which has zeroes present in it, but there should be no zero present in the beginning of the number. For example 3210, 8050896, 70709 are all duck numbers whereas 02364, 03401 are not.
The task is to check whether the given number is a duck number or not.

Since java script can't preserve the leading 0, add this additional step in your program.
number = "number_in_string_format";
if(leading_zero_exist){
    // not a duck number
}
parseInt(number)
continue with the logic on the number

# Week 19 
## Day 1 
Pattern: Sliding Window
Given an array of positive numbers and a positive number ‘k’, find the maximum sum of any contiguous subarray of size ‘k’.

Input: [2, 1, 5, 1, 3, 2], k=3
Output: 9
Explanation: Subarray with maximum sum is [5, 1, 3].
Input: [2, 3, 4, 1, 5], k=2
Output: 7
Explanation: Subarray with maximum sum is [3, 4].

Time Complexity: O(n)

## Day 2 
Pattern: Sliding Window
Use the same pattern as yesterday's CC with little modifications
Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.
Input: [2, 1, 5, 2, 3, 2], S=7
Output: 2
Explanation: The smallest subarray with a sum great than or equal to '7' is [5, 2].
Input: [2, 1, 5, 2, 8], S=7
Output: 1
Explanation: The smallest subarray with a sum greater than or equal to '7' is [8].

## Day 3
Pattern: Two Pointers 
Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.
Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
Input: [1, 2, 3, 4, 6], target=6
Output: [1, 3]
Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6
Input: [2, 5, 9, 11], target=11
Output: [0, 2]
Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

## Day 4
Pattern: Two Pointers
Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.
Input: [2, 3, 3, 3, 6, 9, 9]
Output: 4
Explanation: The first four elements after removing the duplicates will be [2, 3, 6, 9].
Input: [2, 2, 2, 11]
Output: 2
Explanation: The first two elements after removing the duplicates will be [2, 11].

## Week 20 

# Day 1

Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

Input: 23   
Output: true (23 is a happy number)  
Explanations: Here are the steps to find out that 23 is a happy number:

1) 2^2 + 3^2 = 4 + 9 = 13
2) 1^2 + 3^2 = 1 + 9 = 10
3) 1^2 + 0^2 = 1

# Day 2 

Find the minimum depth of a binary tree. The minimum depth is the number of nodes along the shortest path from the root node to the nearest leaf node.

# Day 3 

Given a binary tree and a node, find the level order successor of the given node in the tree. The level order successor is the node that appears right after the given node in the level order traversal.

# Day 4

Find the Corrupt Pair
Pattern: Cyclic Sort
We are given an unsorted array containing ‘n’ numbers taken from the range 1 to ‘n’. The array originally contained all the numbers from 1 to ‘n’, but due to a data error, one of the numbers got duplicated which also resulted in one number going missing. Find both these numbers.
Input: [3, 1, 2, 5, 2]
Output: [2, 4]
Explanation: '2' is duplicated and '4' is missing.
Input: [3, 1, 2, 3, 6, 4]
Output: [3, 5]
Explanation: '3' is duplicated and '5' is missing.

# Day 5
Given a binary tree and a number ‘S’, find all paths in the tree such that the sum of all the node values of each path equals ‘S’. Please note that the paths can start or end at any node but all paths must follow direction from parent to child (top to bottom).

## Week 21 

# Day 1
Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList.
If the total number of nodes in the LinkedList is even, return the second middle node.
Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
Output: 3
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
Output: 4
Input: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> null
Output: 4
Time Complexity: O(n), You should loop on the linked list only once. You shouldn't  count the number of nodes to find the middle.

# Day 2 
Given the head of a Singly LinkedList, write a method to check if the LinkedList is a palindrome or not.
Your algorithm should use constant space and the input LinkedList should be in the original form once the algorithm is finished. The algorithm should have O(N) time complexity where ‘N’ is the number of nodes in the LinkedList.
Input: 2 -> 4 -> 6 -> 4 -> 2 -> null
Output: true
Input: 2 -> 4 -> 6 -> 4 -> 2 -> 2 -> null
Output: false

# Day 3 

Given the head of a LinkedList and a number ‘k’, reverse every ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

# Day 4 
Given the head of a LinkedList and a number ‘k’, reverse every alternating ‘k’ sized sub-list starting from the head.
If, in the end, you are left with a sub-list with less than ‘k’ elements, reverse it too.

# Day 5
Given a binary tree, connect each node with its level order successor. The last node of each level should point to a null node.

## Week 22

# Day 1
Given a binary tree, connect each node with its level order successor. The last node of each level should point to the first node of the next level.

# Day 2
Given a string, find all of its permutations preserving the character sequence but changing case.
Input: "ad52"
Output: "ad52", "Ad52", "aD52", "AD52"
Input: "ab7c"
Output: "ab7c", "Ab7c", "aB7c", "AB7c", "ab7C", "Ab7C", "aB7C", "AB7C"

# Day 3 
Given an unsorted array of numbers, find the ‘K’ largest numbers in it.
Input: [3, 1, 5, 12, 2, 11], K = 3
Output: [5, 12, 11]
Input: [5, 12, 11, -1, 12], K = 3
Output: [12, 11, 12]
Time Complexity: O(n log(k))

# Day 4 
Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.
You can start with any tree, but once you have started you can’t skip a tree. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.
Write a function to return the maximum number of fruits in both the baskets.
Input: Fruit=['A', 'B', 'C', 'A', 'C']
Output: 3
Explanation: We can put 2 'C' in one basket and one 'A' in the other from the subarray ['C', 'A', 'C']
Input: Fruit=['A', 'B', 'C', 'B', 'B', 'C']
Output: 5
Explanation: We can put 3 'B' in one basket and two 'C' in the other basket.
This can be done if we start with the second letter: ['B', 'C', 'B', 'B', 'C']

## Week 23 

# Day 01 
In a non-empty array of numbers, every number appears exactly twice except two numbers that appear only once. Find the two numbers that appear only once.
Input: [1, 4, 2, 1, 3, 5, 6, 2, 3, 5]
Output: [4, 6]

# Day 03 
Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
Examples input/output:
XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false

### Day 04 
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

## Week 24 

### Day 01
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

### Day 02
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples:
iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

### Day 03
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""

### Day 04 
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))(("

## Week 25 

### Day 01 
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

### Day 03 
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False

### Day 04 
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
Examples
removeSmallest([1,2,3,4,5]) = [2,3,4,5]
removeSmallest([5,3,2,1,4]) = [5,3,2,4]
removeSmallest([2,2,1,2,1]) = [2,2,2,1]

## Week 26 

### Day 01 
You might know some pretty large perfect squares. But what about the NEXT one?
Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
Examples:
findNextSquare(121) --> returns 144
findNextSquare(625) --> returns 676
findNextSquare(114) --> returns -1 since 114 is not a perfect