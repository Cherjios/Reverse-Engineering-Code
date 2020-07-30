$(document).ready(function() {
  // Getting references to our form and inputs
  // Giving values to the variables form the input form
  var loginForm = $("form.login"); // Referring to the form with the id login
  var emailInput = $("input#email-input");//Referring to the email typed by the user
  var passwordInput = $("input#password-input"); //Referring to the password typed by the user

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) { //This function creates a module with the email and password typed by the user
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
// This if statement makes function to return if either password and email are empty inputs 
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val(""); //This will clear the input email form 
    passwordInput.val(""); //This will clear the input password form 
  });

  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    $.post("l", {//This function will post on api/login the email and password input by the user 
      email: email,
      password: password
    })
      .then(function() {//This function will send the user to the route members
        window.location.replace("/members");
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);//If there is any error it will be display into the console 
      });
  }
});
