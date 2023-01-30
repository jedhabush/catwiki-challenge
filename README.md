# Live Version

# Application Photos

![alt text](https://i.pinimg.com/originals/b1/bd/d7/b1bdd7f202429ab5623d7581b5341f6d.png)

![alt text](https://i.pinimg.com/originals/4a/21/4a/4a214a75455779ac94872082c67260eb.png)

# Description

## User Stories:

- User story: I can see more photos of the breed on the breed details page. <br/>
- User story: I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly <br/> <br/>

Hello Blowfish Studios family, I am thankful for the chance you have provided me. The project was enjoyable to work on and I had numerous ideas on how to tackle it. I chose to keep it straightforward and uncomplicated. I must confess that I revised my design several times to make it as perfect as possible. <br/>

Regarding the searchbar, I attempted to build it to fetch data from the backend. I created the component and the code was almost complete, however, I felt it was not meeting my expectations and would require more time for debugging and improvement. I have a passion for working on projects and am open to spending more time on it, but I am also eager for your feedback and the possibility of joining your team. As a person and as a software engineer, if I undertake a task, I prefer to complete it thoroughly rather than doing a half-hearted job. Consequently, I left the search functionality code on the backend and decided to exclude it from the front-end.

## Server side Notes:

In a large codebase project, I would prefer to separate controllers and routes into separate files. But in this case, I decided to keep it short and sweet. In a large codebase, separation of concerns is a good practice. It's easier to maintain, debug, and most importantly, scalable.

## Client side Notes:

You might notice that I created a custom hook called (useFetchDataFromBackend) to fetch data from the server. I believe this way will encourage code reusability, offer cleaner code, and be easier to debug. I'm a big fan of dedicated functions that can be reused multiple times across the application. Furthermore, I know that I can do much better in terms of UI and styling, and you might notice that I did not have any CSS files. In a real project, I would usually create a separate CSS file for each component, and the styles would be a mix of inline-styles and external styles. But for the sake of simplicity, I decided to keep all styles inline.

# Tech Stack

## Server:

- **ExpressJs**: It provides a minimalistic and flexible framework for building web applications and APIs. It includes routing and middleware functions that make it easy to handle HTTP requests and responses, as well as other features such as: <br/>

1- Handling different types of HTTP requests (GET, POST, PUT, DELETE, etc.) <br/>
2- Serving static files <br/>
3- Parsing request bodies <br/>
4- Handling cookies and sessions <br/>
5- CORS <br/>
6- Support for template engines <br/>

- **Express-async-handler**: This package catch any errors thrown by the async function and pass it to the next middleware for proper handling, it also makes sure that the promise returned by async function is awaited before the response is sent to the client. <br/>

- **Nodemon**: I love nodemon, it makes my life easier for sure. Nodemon is used to monitor the changes in the file system and automatically restarts the application when it detects a change. It can watch for changes in the source code, configuration files, and other files that are part of the application. This allows developers to make changes to the code and see the results immediately, without having to manually stop and restart the application. <br/>

- **Axios**: Provides a simple, easy-to-use API for making HTTP requests. <br/>
  It supports features such as: <br/>

1- Automatic transformation of request and response data <br/>
2- Automatic handling of JSON data <br/>
3- Automatic handling of errors <br/>
4- Automatic handling of HTTP interceptors <br/>
5- Automatic handling of request and response headers <br/>
6- Automatic handling of timeout <br/>
7- Automatic handling of withCredentials <br/>

- **Body-parser**: Is a middleware for Express.js, a popular web framework for Node.js, that parses incoming request bodies in a middleware before your handlers.<br/>
  It can parse the following types of data: <br/>

1- JSON <br/>
2- Raw <br/>
3- Text <br/>
4- URL-encoded data <br/>

- **CORS**: Allows servers to specify who can access its resources, and how. By default, CORS blocks all cross-origin requests, unless the server explicitly allows them by returning the appropriate CORS headers. <br/>

- **Dotenv**: Is a Node.js package that is used to load environment variables from a .env file into the process.env object. The process.env object contains environment-specific information such as the operating system, paths, and environment variables. <br/>

## Client:

- **ReactJs**
- **Material UI**: I enjoy using MUI. It provides a set of pre-built, reusable components for building user <br/>interfaces with a Material Design look and feel. <br/>
- **Custom Hook**: To fetch data from the backend and resuse it anywhere in the application. <br/>

# Improvements

There are a lot of things I can improve on the current version of the app. Among these improvements are <br/>
1- Add a searchbar or a drop down menu to choose a breed.<br/>
2- Enhance the UI and make it more responsive. The current design is very minimal <br/>
3- Add more functionalities such as allowing users to vote for their favourite cat photo and produce the most voted photos. <br/>
4- Merge the dog API as well so users can have double the joy by searching for both dogs and cats. lol <br/>
