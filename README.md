# Reverse-Engineering-Code
The purpose of the application is to show a codebase  to register and  authenticate users with an email and password, where data is stored in a database.

## Table of Directories and files:
- [Develop/](#Develop)
    - [config/](#config)
        - [Middleware/](#Middleware)
            - [isAuthenticated.js](#isAuthenticated.js)
        - [config.json](#config.json)
        - [Passport.js](#Passport.js)
    - [models/](#models/)
        - [Index.js](#Index.js)
        - [User.js](#User.js)
    - [node_models/](#node_models/)
    - [public/](#public/)
        - [js/](#js/)
            - [Login.js](#Login.js)
            - [Members.js](#) 
            - [Signup.js](#Members.js)
        - [Stylesheets/](#)
            - [Style.css](#Style.css])
        - [Login.html](#Login.html)
        - [Members.html](#)
        - [signup.html](#Members.html)
    - [routes/](#routes/)
        - [Api-routes.js](#Api-routes.js)
        - [html-routes.js](#html-routes.js)
    - [Package-json](#Package-json)
    - [Package-lock.json](#Package-lock.json)
    - [Server.js](#Server.js)

- ### Develop/
    - ### config/
        - ### Middleware/
        - #### isAuthenticated.js
        This file contains a module that sends the user to the next route after logging in. This file exports a module(function) that requires three parameters, req, res, next. If req.user(Request user) exists, then return the function next. Else return response redirect (“/”).
        - #### config.json
        - #### Passport.js:
        This file has the module passport that authenticates the user by his/her email and password. This Files for functionality requires “passport” and “passport-local”, and requires the modules from file index.js and user.js.This file it is going to check if the email used to sign in is present in the user table and also it is going to check that the password registered matches the password as input. 
    - #### models/
        - #### Index.js
        Creates the connexion to our database according to the elements and variables from config.json file.
        - #### User.js
        This file contains the modules to create the table user from sequelize method called  from index.js. Also we set the parameters for each column that belong to the table user. And hash the passwords for each user created.
    - #### node_models/
    - #### public/
        - #### js/
            - #### Login.js
            This file contains the modules to grab the email and password input by the user and make the user log in. Also will post the user information into the /api/login, redirecting the user to /members
            - #### Members.js
            This file makes a Get request to determine which user has logged in and updates the HTML file on the page.
            - #### Signup.js
            This file contains the modules to grab the email and password input by the user and make the user sign in. Also will post the user information into the /api/signup redirecting the user to /members

        - #### Stylesheets/
            - #### Style.css
            This file gives style to form signup and form login
        - #### Login.html
        This file contains the  format of the structure of a webpage login.
        - #### Members.html
        This file contains the  format of the structure of a webpage Members.
        - #### Signup.html
        This file contains the  format of the structure of a webpage signup.
    - #### routes/ 
        - #### Api-routes.js
        This file contains the models for the routes specifying the apis accions, signup, login, logout, user_data.
        - #### Html-routes.js 
        This file contains the models for the routes specifying the home page(“/”), login and  members, giving as a response to the browser the html files.  
    - #### Package-json
    - #### Package-lock.json
    - #### Server.js:
    This file contains the modules to start the server listening on the port specified.This file requires the routes and set up the app to respond to client requests.  



## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [Technology](#Technology)
- [Tools](#Tools)
- [Contributing](#Contributing)
- [Questions](#Questions)

## Installation
```
git clone git@github.com:Cherjios/burger.git
cd burger
```
### Instaling npm packages 
```
npm install inquirer
nmp install mysql
nmp install express
nmp install express-handlebars
```

## Usage

![burger](burger.gif)

## Technology
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/)
* [MySQL](https://www.mysql.com/)
* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)

## Tools
* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/)
* [handlesbars](https://handlebarsjs.com/guide/#what-is-handlebars)



## Contributing
* **SERGIO LOPEZ** 

- [Link to Portfolio Site](https://cherjios.github.io/Responsive-Portfolio/)
- [Link to Github](https://github.com/cherjios)
- [Link to LinkedIn](https://www.linkedin.com/in/sergio-lopez-81790579)

## Questions
 sc.lopezm@gmail.com

