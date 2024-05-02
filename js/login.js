function validate() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const emailError = document.getElementById("emailError");
  const passError = document.getElementById("passwordError");

  // Reset error messages
  emailError.textContent = "";
  passError.textContent = "";

  // Check if email and password are filled
  if (!email || !pass) {
    if (!email) {
      emailError.textContent = "Email required!";
    }
    if (!pass) {
      passError.textContent = "Password required!";
    }
    return false;
  }

  // Check email format
  if (!email.includes("@gmail.com")) {
    emailError.textContent = 'Must be using "@gmail.com"!';
    return false;
  }

  // Check password format
  let hasUpperCase = /[A-Z]/.test(pass);
  let hasNumber = /\d/.test(pass);
  if (pass.length < 8 || !hasUpperCase || !hasNumber) {
    passError.textContent =
      "At least 8 characters, 1 capital letter, and 1 number!";
    return false;
  }

  return true;
}
