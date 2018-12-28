# Would You Rather Project

This is the my final code for the final assessment project for Udacity's React & Redux course.

The `_DATA.js` file represents a fake database and methods that let you access the data. The only thing you need to edit in the ` _DATA.js` file is the value of `avatarURL`. Each user should have an avatar, so you’ll need to add the path to each user’s avatar.

Using the provided code, this React/Redux front end for the application was created using the [Create React App](https://github.com/facebook/create-react-app) to bootstrap the project.

## Installing and Launching the project
1. Change to the directory of the project
2. Run `npm install` or `yarn` to install all dependencies
3. Run `npm start` or `yarn start` to start the web application

## Components
| Name    | Description           |
|-----------------|------------------|-------------------         |
| AddQuestionPage   | Page to add poll question |
| AnsweredQuestions | Component that displays list of answered questions
| Avatar | Displays a user's photo in a circular box
| HomePage | Page to render the list of answered and unanswered questions for the logged in user
| LeaderboardPage | Page to display the leaderboard of users
| LoginPage | Page to allow selection of user to log in as 
| QuestionSummaryCard | Component that displays a summary of a poll question
| Topbar | Component for the top navigation bar displayed on all pages
| UnansweredQuestions | Component that displays the list of unanswered questions for the logged in user
| UserCard | Component that displays the user information including number of answered and created polls, as well as the calculated score
| ViewAnsweredQuestion | Component that displays an answered question and the voting summary for it
| ViewQuestionPage | Page that acts as container for displaying a question, choosing to render either the ViewAnsweredQuestion or ViewUnansweredQuestion component depending on if the logged in user has answered the question yet
| ViewUnansweredQuestion | Component that displays an unanswered question and allows the logged user to submit a vote on an option

## Utils
* routes - this contains the list of routes used by React-Router in navigating thru the application

## State objects
State objects follow the layout of the database namely 
* Users - holding the list of users from the user objects in the database
* Questions - holding the list of questions from the questions objects in the database
* AuthedUser - holding the ID of the current logged in User
## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Contributing

This repository is the starter code for *all* Udacity students. Therefore, we most likely will not accept pull requests. For details, check out [CONTRIBUTING.md](https://github.com/udacity/reactnd-project-would-you-rather-starter/blob/master/CONTRIBUTING.md).
