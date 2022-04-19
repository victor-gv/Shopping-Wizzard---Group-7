"use strict";

// * DOM ELEMENTS

//Pages navigation
const mainSection = document.getElementById("main-section");
const profileSection = document.getElementById("profile-section");
const addressSection = document.getElementById("address-section");
const shippingSection = document.getElementById("shipping-section");
const finishSection = document.getElementById("finish-section");
let showShirt = document.getElementById("selected-shirt");
const headerMain = document.getElementById("header-main");
const headerProgress = document.getElementById("header-progress");
const firstFoot = document.getElementById("first-foot");
const secondFoot = document.getElementById("second-foot");
const dotTwo = document.getElementById("dot-two");
const dotThree = document.getElementById("dot-three");
const dotFour = document.getElementById("dot-four");
const nextButton = document.getElementById("next-button");
const clearForm = document.getElementById("clear-form");

//Main page Elements
const minImgBlack = document.querySelector(".img-black");
const minImgPurple = document.querySelector(".img-purple");
const minImgBlue = document.querySelector(".img-blue");
const minImgRed = document.querySelector(".img-red");
const minImgYellow = document.querySelector(".img-yellow");
const minImgWhite = document.querySelector(".img-white");
const btnBuy = document.getElementById("btn-buy");

const price = document.querySelector(".price");
let size = document.getElementById("size");

// Profile Elements
const profileForm = document.getElementById("profile-form");

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
const addressForm = document.getElementById("form-address");

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
const errorPostalCode = document.getElementById("postal-code-error");

const country = document.getElementById("country");
const telCountry = document.getElementById("tel-country");
const errorCountry = document.getElementById("country-error");

let phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");

// Timers
const timer = document.getElementById("timer");
//Global variables
let profileShow = false;
let addressShow = false;
let shippingShow = false;
let finishShow = false;
let error = false;

// Storing user data
let userData = {};
// ----------------------------

// ----------------------------


//Main page function
minImgWhite.addEventListener("click", changeImgWhite);
minImgBlack.addEventListener("click", changeImgBlack);
minImgPurple.addEventListener("click", changeImgPurple);
minImgBlue.addEventListener("click", changeImgBlue);
minImgRed.addEventListener("click", changeImgRed);
minImgYellow.addEventListener("click", changeImgYellow);
let mainTshirt;

function changeImgWhite() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front.jpg");

  console.log(mainTshirt);

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind.jpg");
}

function changeImgBlack() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-black.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-black.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-black.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-black.jpg");
}

function changeImgPurple() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-purple.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-purple.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-purple.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-purple.jpg");
}

function changeImgBlue() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-light-blue.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-light-blue.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-light-blue.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-light-blue.jpg");
}

function changeImgRed() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-red.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-red.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-red.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-red.jpg");
}

function changeImgYellow() {
  mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-yellow.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-yellow.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-yellow.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-yellow.jpg");
}

size.addEventListener("change", changePrice);

function changePrice() {
  if (size.value == "XS") {
    price.textContent = "20.00$";
  } else if (size.value == "S") {
    price.textContent = "25.00$";
  } else if (size.value == "M") {
    price.textContent = "27.00$";
  } else if (size.value == "L") {
    price.textContent = "30.00$";
  } else if (size.value == "XL") {
    price.textContent = "35.00$";
  }
}

// Main page events
btnBuy.addEventListener("click", showProfile);

function showProfile() {
  mainSection.style.display = "none";
  profileSection.style.display = "flex";
  headerMain.style.display = "none";
  headerProgress.style.display = "block";
  firstFoot.style.display = "none";
  secondFoot.style.display = "flex";
  profileShow = true;
}

nextButton.addEventListener("click", nextPage);


function nextPage() {
  console.log(userData);
  console.log(Object.values(userData).length);
  if (profileShow && Object.values(userData).length === 3 && !error) {
    profileSection.style.display = "none";
    addressSection.style.display = "block";
    dotTwo.style.background = "black";
    profileShow = false;
    addressShow = true;
  } else if (
    !profileShow &&
    Object.values(userData).length === 11 &&
    addressShow &&
    !error
  ) {
    addressSection.style.display = "none";
    shippingSection.style.display = "block";
    dotThree.style.background = "black";
    addressShow = false;
    shippingShow = true;
  } else if (!profileShow && !addressShow && shippingShow) {
    shippingSection.style.display = "none";
    finishSection.style.display = "flex";
    dotFour.style.background = "black";
    shippingShow = false;
    finishShow = true;
    let selectedShirt = document.createElement("img");
    selectedShirt.src = mainTshirt.src;
    showShirt.appendChild(selectedShirt);
  }
}

//Clear form button
clearForm.addEventListener("click", clearFormData);

function clearFormData() {
  mainSection.style.display = "flex";
  profileSection.style.display = "none";
  addressSection.style.display = "none";
  shippingSection.style.display = "none";
  finishSection.style.display = "none";
  headerMain.style.display = "flex";
  headerProgress.style.display = "none";
  firstFoot.style.display = "flex";
  secondFoot.style.display = "none";
  dotTwo.style.background = "white";
  dotThree.style.background = "white";
  dotFour.style.background = "white";
  profileShow = false;
  addressShow = false;
  shippingShow = false;
  finishShow = false;
  error = false;
  profileForm.reset();
  addressForm.reset();
  userData = {};
}

// Profile Events

userName.addEventListener("focus", changeStyle);
userName.addEventListener("blur", validateProfile);

userEmail.addEventListener("focus", changeStyle);
userEmail.addEventListener("blur", validateProfile);

userPassword.addEventListener("focus", changeStyle);
userPassword.addEventListener("blur", validateProfile);

confirmPassword.addEventListener("focus", changeStyle);
confirmPassword.addEventListener("blur", validateProfile);

// ----------------------------
// Address Events
firstName.addEventListener("focus", changeStyle);
firstName.addEventListener("blur", validateAddress);

lastName.addEventListener("focus", changeStyle);
lastName.addEventListener("blur", validateAddress);

address_1.addEventListener("focus", changeStyle);
address_1.addEventListener("blur", validateAddress);

address_2.addEventListener("focus", changeStyle);
address_2.addEventListener("blur", validateAddress);

postalCode.addEventListener("focus", changeStyle);
postalCode.addEventListener("blur", validateAddress);

phone.addEventListener("focus", changeStyle);
phone.addEventListener("blur", validateAddress);

country.addEventListener("focus", changeStyle);
country.addEventListener("blur", validateAddress);

phone.addEventListener("focus", changeStyle);
phone.addEventListener("blur", validateAddress);

birthday.addEventListener("focus", changeStyle);
birthday.addEventListener("blur", validateAddress);

// PENDING, it´s not mandatory
function changeStyle() {}



// validating data from Profile Page
function validateProfile() {
  // UserName Validation
  if (userName.value.trim() === "" || userName.value === null) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name is required";
    error = true;
  } else if (userName.value.length < 5 || userName.value.length > 20) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name length between 5 and 20 characters";
    error = true;
  } else if (userName.value.includes(" ")) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name can´t have space";
    error = true;
  } else {
    errorUserName.style.display = "none";
    userData.username = userName.value;
    error = false;
  }

  // Email validation
  if (!userEmail.value.includes("@") || userEmail.value.length > 50) {
    errorEmail.style.display = "flex";
    errorEmail.textContent = "Invalid email";
    error = true;
  } else {
    errorEmail.style.display = "none";
    userData.userEmail = userEmail.value;
    error = false;
  }

  // Password validation
  if (userPassword.value.trim() === "" || userPassword.value === null) {
    errorPassword.style.display = "flex";
    errorPassword.textContent = "Required Password";
    error = true;
  } else if (
    !userPassword.value.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    )
  ) {
    errorPassword.style.display = "flex";
    errorPassword.textContent =
      "Invalid password. It must include one number, one uppercase letter, one lowercase letter and one special character. The length must be between 8 and 20 characters.";
    error = true;
  } else if (userPassword.value == confirmPassword.value) {
    userData.userPassword = confirmPassword.value;
    error = true;
  } else {
    errorPassword.style.display = "none";
    error = false;
  }

  // Password confirmation
  if (userPassword.value !== confirmPassword.value) {
    errorConfirmPassword.style.display = "flex";
    errorConfirmPassword.textContent = "Error! different passwords";
    error = true;
  } else {
    errorConfirmPassword.style.display = "none";
    userData.userPassword = confirmPassword.value;
    error = false;
  }
}

function validateAddress() {
  // First name validation
  if (firstName.value.trim() === "" || firstName.value === null) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent = "First name is required";
    error = true;
  } else if (firstName.value.length > 20) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent =
      "First name must be smaller than 20 characters";
    error = true;
  } else if (firstName.value.includes(" ")) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent = "First name can´t have space";
    error = true;
  } else {
    errorfirstName.style.display = "none";
    userData.firstName = firstName.value;
    error = false;
  }

  // Last name validation
  if (lastName.value.trim() === "" || lastName.value === null) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name is required";
    error = true;
  } else if (lastName.value.length > 20) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name must be smaller than 20 characters";
    error = true;
  } else if (lastName.value.includes(" ")) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name can´t have space";
    error = true;
  } else {
    errorLastName.style.display = "none";
    userData.lastName = lastName.value;
    error = false;
  }

  // Address 1 validation
  if (address_1.value.trim() === "" || address_1.value === null) {
    errorAddress_1.style.display = "flex";
    errorAddress_1.textContent = "Address 1 is required";
    error = true;
  } else if (address_1.value.length > 50) {
    errorAddress_1.style.display = "flex";
    errorAddress_1.textContent = "Address 1 must be smaller than 50 characters";
    error = true;
  } else {
    errorAddress_1.style.display = "none";
    userData.address_1 = address_1.value;
    error = false;
  }

  // Address 2 validation
  if (address_2.value.length > 50) {
    errorAddress_2.style.display = "flex";
    errorAddress_2.textContent = "Address 2 must be smaller than 50 characters";
    error = true;
  } else {
    errorAddress_2.style.display = "none";
    userData.address_2 = address_2.value;
    error = false;
  }

  // Postal code validation
  if (postalCode.value.trim() === "" || postalCode.value === null) {
    errorPostalCode.style.display = "flex";
    errorPostalCode.textContent = "Postal code is required";
    error = true;
  } else if (postalCode.value.length > 5) {
    errorPostalCode.style.display = "flex";
    errorPostalCode.textContent = "Postal code must be at maximum 5 characters";
    error = true;
  } else {
    errorPostalCode.style.display = "none";
    userData.postalCode = postalCode.value;
    error = false;
  }

  // Country validation
  if (country.value == "Select one option") {
    errorCountry.style.display = "flex";
    errorCountry.textContent = "Country is required";
    error = true;
  } else if (country.value == "Andorra") {
    telCountry.value = "+376";
    errorCountry.style.display = "none";
    error = false;
  } else if (country.value == "Spain") {
    telCountry.value = "+34";
    errorCountry.style.display = "none";
    error = false;
  } else if (country.value == "France") {
    telCountry.value = "+33";
    errorCountry.style.display = "none";
    error = false;
  } else if (country.value == "Germany") {
    telCountry.value = "+49";
    errorCountry.style.display = "none";
    error = false;
  } else if (country.value == "Greece") {
    telCountry.value = "+30";
    errorCountry.style.display = "none";
    error = false;
  }

  //Phone validation
  if (phone.value.trim() === "" || phone.value === null) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone is required";
    error = true;
  } else if (phone.value.length > 9) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone must be at maximum 9 digits";
    error = true;
  } else if (isNaN(phone.value)) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone must be a number";
    error = true;
  } else {
    phoneError.style.display = "none";
    userData.phone = telCountry.value + phone.value;
    userData.country = country.value;
    error = false;
  }

  // Birthday Event
  birthday.addEventListener("change", getUserBirth);

  // Getting current date in order to avoid the Match between "birthday selected" and "current date"
  let datePickUp = new Date();
  let currentDay = datePickUp.getDate();
  let currentMonth = datePickUp.getMonth() + 1;
  let currentYear = datePickUp.getFullYear();
  let fullCurrentDate = [currentDay, currentMonth, currentYear].join("/");

  //Getting user birthday
  function getUserBirth() {
    let getBirthValue = birthday.value;
    let date = new Date(getBirthValue);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let fullDate = [day, month, year].join("/");
    userData.userBirthday = fullDate;
  }

  /* birthday validation */
  if (!birthday.value) {
    errorBirthday.style.display = "flex";
    errorBirthday.textContent = "Birthday is required";
    error = true;
  } else if (userData.userBirthday == fullCurrentDate) {
    errorBirthday.style.display = "flex";
    errorBirthday.textContent = "Birthday can't be the current date";
    error = true;
  } else {
    errorBirthday.style.display = "none";
    error = false;
  }
}

// Timers
let countTimer = 0;

const oneMinute = 60000;
const fiveSeconds = 5000;

setInterval(function () {
  if (profileShow || addressShow || shippingShow || finishShow) {
    if (countTimer === 0) {
      timer.style.display = "block";
      timer.innerHTML = `You start your purchase ${
        countTimer + 1
      } minute ago, <b> Hurry up! </b> The limit is 5 minutes `;
      countTimer++;
    } else {
      timer.style.display = "block";
      timer.innerHTML = `You start your purchase ${
        countTimer + 1
      } minutes ago, <b> Hurry up! </b> The limit is 5 minutes `;
      countTimer++;
    }

    setTimeout(function () {
      timer.style.display = "none";
    }, fiveSeconds);
  }
  if (countTimer === 5) {
    timer.textContent = `The maximum date for your purchase expired, you are going to be redirect to the main page in 5 seconds`;
    setTimeout(function () {
      timer.style.display = "none";
      clearFormData();
      countTimer = 0;
    }, fiveSeconds);
  }
}, oneMinute);




console.log(userData);