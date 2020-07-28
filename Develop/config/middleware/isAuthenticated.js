//Middleware is software that provides common services and capabilities to applications outside of what's offered by the operating system. 
//Data management, application services, messaging, authentication, and API management are all commonly handled by middleware.

//The module.exports is a special object which is included in every JavaScript file in the Node.js application by default. The module is a variable that represents the current module, and exports is an object that will be exposed as a module. 
//So, whatever you assign to module.exports will be exposed as a module.

// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};

//This file exports a module(function) that requires three parameters, req, res, next. 
//If req.user(Request user) exists, then return the function next. Else return response redirect (“/”).

