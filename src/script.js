"use strict";

// * DOM ELEMENTS
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

// Adress Elements
const firstName = document.getElementById("fname");
const errorfirstName = document.getElementById("fname-error");

const lastName = document.getElementById("lname");
const errorLastName = document.getElementById("lname-error");

const birthday = document.getElementById("birthday");
const errorBirthday = document.getElementById("birthday-error");

const address_1 = document.getElementById("address1");
const errorAddress_1 = document.getElementById("address1-error");

const address_2 = document.getElementById("address2");
const errorAddress_2 = document.getElementById("address2-error");

const postalCode = document.getElementById("postal-code");
const errorpostalCode = document.getElementById("postal-code-error");

const phone = document.getElementById("phone");
// const errorpostalCode = document.getElementById("postal-code-error");

// ----------------------------
// * EVENTS
// ----------------------------
// Profile Events
userName.addEventListener("focus", changeStyle);
userName.addEventListener("blur", validateProfile);

userEmail.addEventListener("focus", changeStyle);
userEmail.addEventListener("blur", validateProfile);

userPassword.addEventListener("focus", changeStyle);
userPassword.addEventListener("blur", validateProfile);

postalCode.addEventListener("focus", changeStyle);
postalCode.addEventListener("blur", validateProfile);

// ----------------------------
// Address Events
firstName.addEventListener("focus", changeStyle);
firstName.addEventListener("blur", validateAddress);

lastName.addEventListener("focus", changeStyle);
lastName.addEventListener("blur", validateAddress);

lastName.addEventListener("focus", changeStyle);
errorLastName.addEventListener("blur", validateAddress);

phone.addEventListener("focus", changeStyle);
phone.addEventListener("blur", validateAddress);

// PENDING, it´s not mandatory
function changeStyle() {}

// Storing user data
const userData = {};

// validating data from Profile Page
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

function validateAddress() {
  console.log("blur works");
  // First name validation
  if (firstName.value.trim() === "" || firstName.value === null) {
    errorfirstName.textContent = "Name is required";
  } else if (firstName.value.length < 5 || firstName.value.length > 20) {
    errorfirstName.textContent = "Name length between 5 and 20 characters";
  } else if (firstName.value.includes(" ")) {
    errorfirstName.textContent = "Name can´t have space";
  } else {
    errorfirstName.style.display = "none";
    userData.username = firstName.value;
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
