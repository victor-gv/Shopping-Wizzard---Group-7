"use strict";

// Select Elements
const form = document.getElementById("profile-form");

const btnNext = document.querySelector(".btn-next");

const userName = document.getElementById("user-name");
const errorUserName = document.getElementById("error-userName");

userName.addEventListener("focus", changeStyle);
userName.addEventListener("blur", validate);

function changeStyle() {}

const userData = {};
const errorMessagge = {};

function validate() {
  console.log("blur works!");
  if (userName.value.trim() === "" || userName.value === null) {
    errorMessagge.userName = "Name is required";
    console.log();
  }
}

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
