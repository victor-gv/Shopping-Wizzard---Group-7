"use strict";

// Profile Elements
const form = document.getElementById("profile-form");

const btnNext = document.querySelector(".btn-next");

const userName = document.getElementById("user-name");
const errorUserName = document.getElementById("error-userName");

const userEmail = document.getElementById("email");
const errorEmail = document.getElementById("error-email");

const userPassword = document.getElementById("password");
const errorPassword = document.getElementById("error-password");

const confirmPassword = document.getElementById("confirm-password");
const errorConfirmPassword = document.getElementById("error-confirmPassword");

// Profile Events
userName.addEventListener("focus", changeStyle);
userName.addEventListener("blur", validateProfile);

userEmail.addEventListener("focus", changeStyle);
userEmail.addEventListener("blur", validateProfile);

userPassword.addEventListener("focus", changeStyle);
userPassword.addEventListener("blur", validateProfile);

confirmPassword.addEventListener("focus", changeStyle);
confirmPassword.addEventListener("blur", validateProfile);

function changeStyle() {}

const userData = {};
// const errorMessage = {};

function validateProfile() {
  // UserName Validation
  if (userName.value.trim() === "" || userName.value === null) {
    errorUserName.textContent = "Name is required";
  } else if (userName.value.length < 5 || userName.value.length > 20) {
    errorUserName.textContent = "Name length between 5 and 20 characters";
  } else if (userName.value.includes(" ")) {
    errorUserName.textContent = "Name can´t have space";
  } else {
    errorUserName.style.display = "none";
    userData.username = userName.value;
  }

  // Email validation
  if (!userEmail.value.includes("@") || userEmail.value.length > 50) {
    errorEmail.textContent = "Invalid email";
  } else {
    errorEmail.style.display = "none";
    userData.userEmail = userEmail.value;
  }

  // Password validation
  if (
    userPassword.value.includes(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$"
    )
  ) {
    errorPassword.textContent = "Invalid password";
    console.log(userPassword.value);
  }

  // Password confirmation
  if (userPassword.value !== confirmPassword.value) {
    errorConfirmPassword.value = "Error! different passwords";
  } else {
    userData.password = confirmPassword.value;
  }
}

console.log(userData);

//  Function profile
// let requirement = function () {
//   for (const profile of form) {
//     if (profile.value.trim() === "") {
//       profile.style.border = "2px solid red";
//       profile.placeholder = "Field required";
//     }
//   }
// };

//Button next
// btnNext.addEventListener("click", (e) => {
//   e.preventDefault();
//   requirement();
// });
