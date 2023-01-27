# Live Version

# Application Photos

![alt text](https://i.pinimg.com/originals/19/0f/4f/190f4f285333554ea6e578e3fe287fcc.png)

![alt text](https://i.pinimg.com/originals/26/62/34/26623408c4b2831b0915ab8941535e79.png)

![alt text](https://i.pinimg.com/originals/bb/06/3e/bb063ed84ee953d9ee445ca7320eab19.png)

# Description

## User Stories:

- User story: I can search for cat breeds from the homepage. <br/>
- User story: I can see more photos of the breed on the breed details page. <br/>
- User story: I can see the breed details including description, temperament, origin, life span, adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly <br/> <br/>

Hello Blowfish Studios family, I am grateful for the opportunity you have given me. It was a fun project to develop. I had tons of ideas on how to approach this project, but I decided to keep it straight to the point and simple.

## Server side Notes:

In a large codebase project, I would prefer to separate controllers and routes into separate files. But in this case, I decided to keep it short and sweet. In a large codebase, separation of concerns is a good practice. It's easier to maintain, debug, and most importantly, scalable.

## Client side Notes:

You might notice that I created a custom hook called (useFetchDataFromBackend) to fetch data from the server. I believe this way will encourage code reusability, offer cleaner code, and be easier to debug. I'm a big fan of dedicated functions that can be reused multiple times across the application. Furthermore, I know that I can do much better in terms of UI and styling, and you might notice that I did not have any CSS files. In a real project, I would usually create a separate CSS file for each component, and the styles would be a mix of inline-styles and external styles. But for the sake of simplicity, I decided to keep all styles inline.

# Tech Stack

## Server:

- ExpressJs: It provides a minimalistic and flexible framework for building web applications and APIs. It includes routing and middleware functions that make it easy to handle HTTP requests and responses, as well as other features such as: <br/>

- Handling different types of HTTP requests (GET, POST, PUT, DELETE, etc.) <br/>
- Serving static files <br/>
- Parsing request bodies <br/>
- Handling cookies and sessions <br/>
- CORS <br/>
- Support for template engines <br/>

- Express-async-handler: This package catch any errors thrown by the async function and pass it to the next middleware for proper handling, it also makes sure that the promise returned by async function is awaited before the response is sent to the client. <br/>

- Nodemon: I love nodemon, it makes my life easier for sure. Nodemon is used to monitor the changes in the file system and automatically restarts the application when it detects a change. It can watch for changes in the source code, configuration files, and other files that are part of the application. This allows developers to make changes to the code and see the results immediately, without having to manually stop and restart the application. <br/>

- Axios: Provides a simple, easy-to-use API for making HTTP requests. <br/>
  It supports features such as: <br/>

- Automatic transformation of request and response data <br/>
- Automatic handling of JSON data <br/>
- Automatic handling of errors <br/>
- Automatic handling of HTTP interceptors <br/>
- Automatic handling of request and response headers <br/>
- Automatic handling of timeout <br/>
- Automatic handling of withCredentials <br/>

- Body-parser: Is a middleware for Express.js, a popular web framework for Node.js, that parses incoming request bodies in a middleware before your handlers.<br/>
  It can parse the following types of data: <br/>

- JSON <br/>
- Raw <br/>
- Text <br/>
- URL-encoded data <br/>

- CORS: Allows servers to specify who can access its resources, and how. By default, CORS blocks all cross-origin requests, unless the server explicitly allows them by returning the appropriate CORS headers. <br/>

- Dotenv: Is a Node.js package that is used to load environment variables from a .env file into the process.env object. The process.env object contains environment-specific information such as the operating system, paths, and environment variables. <br/>

## Client:

- ReactJs
- Material UI: I enjoy using MUI. It provides a set of pre-built, reusable components for building user <br/>interfaces with a Material Design look and feel. <br/>
- Custom Hook: To fetch data from the backend and resuse it anywhere in the application. <br/>

# Improvements

There are a lot of things I can improve on the current version of the app. Among these improvements are
1- Enhance the UI and make it more responsive. <br/>
2- Add more functionalities such as allowing users to vote for their favourite cat photo and produce the most voted photos. <br/>
3- Merge the dog API as well so users can have double joy by searching for dogs and cats lol <br/>
