"use strict";

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
