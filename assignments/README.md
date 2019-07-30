# List of Assignments

## Week 1

### Day 3: Git commit and push

Remember to change your default branch to `dev` before proceeding.

1. Create a folder named `day03` inside `week01`.
2. Create a file named `why_i_want_to_be_a_programmer.txt` inside the `day03` folder.
3. Write a short note in the file on why you want to be a programmer.
4. Commit the final changes and push to your repository.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 4: Creating an HTML page

1. Create a folder named `day04` inside `week01`.
2. Create a file named `programming-language-museum.html` inside the `day04` folder.
3. Write appropriate html code to achieve a page which looks like the image below.

![programming language museum](images/programming-language-museum.png)

> Solution session: _day-1_
>
> Due day: _day-1_

### Weekly Test: Create an html document which looks like the provided image
![union territories](images/union-territories.png)

1. You have to use the exact tags as mentioned in the screenshot below.
2. Put your files under `assignments` > `week01` > `weekly-test`.


> Due day: _day-3_

----------
## Week 2

### Day 1: Create a webpage about yourself

1. Create a page about you with `html` and `css` having:
    1. A heading with your name.
    2. A short paragraph about you.
    3. A list of your favourite movies.
2. Put your files under `assignments` > `week02` > `day01`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 2: Create a webmail page
![webmail](images/webmail.png)

1. Create a webmail page which has three sections:
    1. The left one is for navigation and contains links for Inbox, Sent, Drafts & Trash. You can use an un-ordered list to do that.
    2. The right box is a table of emails with coloumns for From, Subject & Date.
    3. The bottom one is for placing ads.
2. You can use sizes, colors, fonts, etc according to your choice.
3. Put your files under `assignments` > `week02` > `day02`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 3: Create a company web page using Bootstrap 4

Home page
![home](images/bootstrap-company-home.png)
About Us page
![about us](images/bootstrap-company-about.png)
Contact Us page
![contact us](images/bootstrap-company-contact.png)

1. Do not use any custom css styles.
2. Use Bootstrap grid (rows and columns).
3. You are free to replace text content.
4. Put your files under `assignments` > `week02` > `day03`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 5: Even numbers in descending order

1. Write a Javascript function that displays even numbers in descending order.
2. Start from `100` and end at `2`.
3. Sample output:
```
100
98
96
.
.
.
2
```
4. No HTML or CSS required.
5. Put your file under `assignments` > `week02` > `day05`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Weekly Test: Create a shopping page
![myshop](images/myshop.png)

1. This is an assignment where you are required to build to given specifications.
2. Create a page which has these sections:
    1. The header at the top is fixed and does not hide on scroll.
    2. The next one is for navigation and contains links for categories and a search box. You can use an un-ordered list to do that. This is also fixed and does not hide on scroll.
    3. On the left we have a sidebar for filters. It has checkboxes
    4. On the right is the product catalogue including price and other details.
    5. You have a select dropdown for the 'Sort By' option.
3. Put your files under `assignments` > `week02` > `weekly-test`.

> Due day: _day-3_

----------
## Week 3

### Day 1: Print multiplication tables

1. `n` should be entered in a JS prompt on the browser.
2. The input should be a valid number (use `parseInt`).
3. The output should be shown on the console in the following format (assuming n is 5):
```
5 * 1 = 5
5 * 2 = 10
.
.
.
5 * 10 = 50
```
4. No HTML or CSS required.
5. Put your files under `assignments` > `week03` > `day01`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 2: Looping and searching

1. Write a Javascript function that takes two inputs - an array and a search value.
2. Function should search for the search value in the array.
3. If the element is found, the function should return the position of the element in an array.
4. If the element is not found, the function should return `-1`.
5. No HTML or CSS required.
6. Put your files under `assignments` > `week03` > `day02`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Day 3: Handling events

1. Create a `div` with `200px` height and width.
2. Add two event handlers for the div - `mouseover` and `mouseout`.
3. The `background-color` of the body should change to `pink` when the mouse hovers on it.
4. The `background-color` of the body should change to `white` when the mouse moves away from the `div`.
5. Put your files under `assignments` > `week03` > `day03`.

> Solution session: _day-0_
>
> Due day: _day-0_

### Weekly Test: Create a simple calculator
![calculator](images/calculator.png)

1. Use inputs of type `number`.
2. Use JS functions as event hadlers on the operation buttons.
3. Put your files under `assignments` > `week03` > `weekly-test`.

> Due day: _day-3_

----------
## Week 4

### Day 2: Quiz in jQuery 
![quiz](images/quiz.png)

1. The application should load a random question from the [quiz.json](data/quiz.json) file.
2. Once the user types an answer in the text input and clicks Submit, the app should check whether the answer is correct or not. Show a dialog window (prompt) depending upon the right/wrong answer.
3. Also, once the page is loaded, a timer should be started from 30 seconds and go down till 0 second. Once the timer reaches 0, the user should be shown a message saying that `Time is over!` and he/she should not be able to submit an answer after that.
4. For styling and layout, please use Bootstrap.

**Hint:** You can correctly use `Math.random()` to get a random number between 1 and 10.

> Solution session: _day-1_
>
> Due day: _day-1_

### Weekly Test: Library book search
![library](images/library.png)

Create a JavaScript application that lets the user search for books under a particular language.

1. Use AJAX to load [books.json](data/books.json)
2. Use an event handler to get the user input from the form.
3. Create DOM manipulation methods to show the search result in a table.
4. Every time a new search is made, make sure to clear out the last set of results.
5. You are free to use either vanilla JS or jQuery.
6. For the UI (input and tables), use Bootstrap.

> Due day: _day-3_

----------
## Week 5

### Day 2: Express routing with req.params
1. An express application with four routes that perform addition, subtraction, multiplication and division.
2. The `add` route should take two url parameters and send back their sum.
3. The `sub` route should take two url parameters and send back their difference.
4. The `mul` route should take two url parameters and send back their product.
5. The `div` route should take two url parameters and send back their division result.

> Due day: _day-1_