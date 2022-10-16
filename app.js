"use strict";

let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-pass");

function validatePassword() {
  confirmPassword.setCustomValidity(
    password.value != confirmPassword.value ? "Passwords Don't Match" : ""
  );
}

console.log(password);

password.onchange = validatePassword;
confirmPassword.onkeyup = validatePassword;

//comment test commit
