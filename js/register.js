function validate() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var gender = document.getElementsByName("gender");
  var city = document.getElementById("city");
  var password = document.getElementById("password");
  var confirmPassword = document.getElementById("confirm-password");

  var usernameError = document.getElementById("usernameError");
  var emailError = document.getElementById("emailError");
  var genderError = document.getElementById("genderError");
  var cityError = document.getElementById("cityError");
  var passwordError = document.getElementById("passwordError");
  var confirmError = document.getElementById("confirmError");

  var valid = true;

  if (username.value == "") {
    usernameError.textContent = "Username required!";
    valid = false;
  } else {
    usernameError.textContent = "";
  }

  if (!email.value.includes("@gmail.com")) {
    emailError.textContent = 'Must be using "@gmail.com"!';
    valid = false;
  } else {
    emailError.textContent = "";
  }

  if (!gender[0].checked && !gender[1].checked) {
    genderError.textContent = "Gender required!";
    valid = false;
  } else {
    genderError.textContent = "";
  }

  if (city.value == "") {
    cityError.textContent = "City Required";
    valid = false;
  } else {
    cityError.textContent = "";
  }

  var passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!password.value.match(passwordRegex)) {
    passwordError.textContent =
      "At least 8 characters, 1 capital letter, and 1 number!";
    valid = false;
  } else {
    passwordError.textContent = "";
  }

  if (confirmPassword.value != password.value) {
    confirmError.textContent = "Password is not the same ";
    valid = false;
  } else {
    confirmError.textContent = "";
  }

  return valid;
}
