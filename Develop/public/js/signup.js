$(document).ready(function() {
  // Getting references to our form and input
   // Giving values to the variables form the input form
  var signUpForm = $("form.signup"); // Referring to the form with the id signup
  var emailInput = $("input#email-input"); //Referring to the email typed by the user
  var passwordInput = $("input#password-input"); //Referring to the password typed by the user

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) { //This function creates a obj with the email and password typed by the user
    event.preventDefault();
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
    // This if statement makes function to return if either password and email are empty inputs 
    if (!userData.email || !userData.password) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val(""); //This will clear the input email form
    passwordInput.val(""); //This will clear the input password form
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post("/api/signup", { //This function will post on api/signup the email and password input by the user
      email: email,
      password: password
    })
      .then(function(data) {
        window.location.replace("/members"); //This function will send the user to the route members after singing up
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    // $("#alert .msg").text(err.responseJSON);
    $("#alert .msg").text("Invalid");// if there is any error an "Invalid" Messages will be display to the user
    $("#alert").fadeIn(500);//500 Internal Server Error server error response code
  }
});
