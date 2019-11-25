Create a questions array with 10 entries having the below format for each question 

"questions": [
        {
            "id": 1010,
            "name": "Inside which HTML element do we put the JavaScript?",
            "questionTypeId": 1,
            "options": [
                {
                    "name": "javascript",
                    "isAnswer": false
                },
                {
                    "name": "scripting",
                    "isAnswer": false
                },
                {
                    "name": "script",
                    "isAnswer": true
                },
                {
                    "name": "js",
                    "isAnswer": false
                }
        }
]

Create a React app with the below components 
    App Component 
    Question Component 
    QuestionForReview Component 
    Review Component 
    Result Component 

App Component 
    -> Should include relevent componets depending on the routes given below 
    -> Quiz button should display the route `/quiz`
    -> Review button should display the route `/quiz/reivew`
    -> Submit Quiz button should ask for the confirmation and route to `/quiz/result`
        -> The above buttons shouldn't be displayed in the result page 
    -> First Button 
        -> On click of button it should display the first question 
    -> Last Button 
        -> On click of button it should display the last question 
    -> Next Button 
        -> On click of next button it should display the next question 
    -> Prev Button 
        -> On click of prev button it should display the prev question

Question Component 
    -> Should receive the question object as props and render as per the screenshot given 
    -> Write a dispatcher to store the answer in the `answers` variable in the global state 
    -> Write a subscription to receive the questions from the global store 

QuestionForReview Component 
    -> Should display whether the question is `Answerd` or `Not Answered`. Follow the same styling as per the screenshot 

Review Component 
    -> Should display all the questions rendered in QuestionForReview Component 
    -> On click of the question, it should take back to the quiz page and display the relevant question 


1. Create a global state using Redux and have 10 questions in the initial state
2. Maintain a varailable called `answers` in the state and store all the answers students have selected  
5. Create 3 routes 
    i) `/quiz` should render the question and have all the relevant buttons as per the screenshot 
    ii) `/quiz/review` should display a review page for all the questions as per the screenshot 
    iii) `/quiz/result` should display the results as per the screenshot
        -> Follow the styling as per screenshot

*Use Bootstrap for styling*