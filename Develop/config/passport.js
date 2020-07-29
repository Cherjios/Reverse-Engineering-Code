//RequireJS is a JavaScript file and module loader. It is optimized for in-browser use, but it can be used in other JavaScript environments, 
//like Rhino and Node. Using a modular script loader like RequireJS will improve the speed and quality of your code.

// Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped in to any Express-based web application. 
//A comprehensive set of strategies support authentication using a username and password, Facebook, Twitter, and more.

// calling passport that requires the modules on passport
var passport = require("passport");

// calling LocalStrategy that requires the modules on passport-local
var LocalStrategy = require("passport-local").Strategy;  //This module lets you authenticate using a username and password in your Node.js applications.

// db require modules in index.js and user.js
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email" //giving usernameFiled an email
  },
  function(email, password, done) {
    // When a user tries to sign in this code runs
    //The function takes three parameters email, password and callback function done
    db.User.findOne({ //In this line we are calling the function fineOne to compare 
      //if the email typed by the user  exist in the table user
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) { // if the email as input does not exist in the table user,the function calls the callback function
        return done(null, false, { //callback function sends messages "Incorrect email" 
          message: "Incorrect email." 
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect
      else if (!dbUser.validPassword(password)) { //callback function sends messages "Incorrect incorrect password" if password does not match on from user table
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work

// in order to support login sessions, Passport will serialize and deserialize user instances to and from the session.
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
