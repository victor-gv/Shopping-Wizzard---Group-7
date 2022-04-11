"use strict";

// Select DOM
const formData = document.getElementsByTagName("form");
const userName = document.getElementById("name");
console.log(userName);
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password");

const firstName = document.getElementById("fname").value;
console.log(firstName);
const lastName = document.getElementById("lname");
const birthDate = document.getElementById("birthday");
const address_1 = document.getElementById("address1");
const address_2 = document.getElementById("address2");

// Engine function for requirement
// let requirement = (id, message) => {
//   if (id.value.trim() === " ") {

//   }
// };

//target "form" and add submit event listener
// formData.addEventListener("click", (e) => {
//   e.preventDefault();

//   requirement(userName, "Username cannot be blank");

// }

// ------------------------------------
// userName maxlength and min length
const maxLength = (str) => {
  if (isNaN(str) && str.length > 5 && str.length < 20) {
    alert("error");
  }
};

firstName.addEventListener("click", maxLength);
// Select Elements
let form = document.getElementById("profile-form");
let btnNext = document.querySelector(".btn-next");

//  Function profile
let requirement = function () {
  for (const profile of form) {
    if (profile.value.trim() === "") {
      profile.style.border = "2px solid red";
      profile.placeholder = "Field required";
    }
  }
};

//Button next
btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  requirement();
});
