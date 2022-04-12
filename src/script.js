"use strict";

// * DOM ELEMENTS

//Pages navigation
const mainSection = document.getElementById("main-section");
const profileSection = document.getElementById("profile-section");
const addressSection = document.getElementById("address-section");
const shippingSection = document.getElementById("shipping-section");
const finishSection = document.getElementById("finish-section");
const headerMain = document.getElementById("header-main");
const headerProgress = document.getElementById("header-progress");
const firstFoot = document.getElementById("first-foot");
const secondFoot = document.getElementById("second-foot");
const dotTwo = document.getElementById("dot-two");
const dotThree = document.getElementById("dot-three");
const dotFour = document.getElementById("dot-four");
const nextButton = document.getElementById("next-button");



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
const errorPostalCode = document.getElementById("postal-code-error");

const country = document.getElementById("country");
const telCountry = document.getElementById("tel-country");

let phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");


//Global variables
let profileShow = false;
let addressShow = false;
let shippingShow = false;
let finishShow = false;

// Storing user data
const userData = {};
// ----------------------------
// * EVENTS
// ----------------------------

// Main page events
btnBuy.addEventListener("click", showProfile);

function showProfile() {
  mainSection.style.display = "none";
  profileSection.style.display = "flex";
  headerMain.style.display = "none";
  headerProgress.style.display = "block";
  firstFoot.style.display = "none";
  secondFoot.style.display = "flex";
}



nextButton.addEventListener("click", nextPage);

function nextPage() {
  console.log(userData);
  console.log(Object.values(userData).length);
  if (!profileShow &&  Object.values(userData).length === 3) {
    profileSection.style.display = "none";
    addressSection.style.display = "flex";
    dotTwo.style.background = "black";
    profileShow = true;

  } else if (profileShow && !addressShow) {
    addressSection.style.display = "none";
    shippingSection.style.display = "flex";
    dotThree.style.background = "black";
    addressShow = true;

  } else if (profileShow && addressShow && !shippingShow) {
    shippingSection.style.display = "none";
    finishSection.style.display = "flex";
    dotFour.style.background = "black";
    shippingShow = true;

  }
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

// PENDING, it´s not mandatory
function changeStyle() {}

//Main page function
minImgWhite.addEventListener("click", changeImgWhite);
minImgBlack.addEventListener("click", changeImgBlack);
minImgPurple.addEventListener("click", changeImgPurple);
minImgBlue.addEventListener("click", changeImgBlue);
minImgRed.addEventListener("click", changeImgRed);
minImgYellow.addEventListener("click", changeImgYellow);

function changeImgWhite() {
  let mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind.jpg");
}

function changeImgBlack() {
  let mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-black.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-black.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-black.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-black.jpg");
}

function changeImgPurple() {
  let mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-purple.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-purple.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-purple.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-purple.jpg");
}

function changeImgBlue() {
  let mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-light-blue.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-light-blue.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-light-blue.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-light-blue.jpg");
}

function changeImgRed() {
  let mainTshirt = document.getElementById("main-tshirt");
  mainTshirt.setAttribute("src", "/assets/front-red.jpg");

  let frontTshirt = document.getElementById("front");
  frontTshirt.setAttribute("src", "/assets/front-red.jpg");

  let turnTshirt = document.getElementById("turn");
  turnTshirt.setAttribute("src", "/assets/turn-red.jpg");

  let behindTshirt = document.getElementById("behind");
  behindTshirt.setAttribute("src", "/assets/behind-red.jpg");
}

function changeImgYellow() {
  let mainTshirt = document.getElementById("main-tshirt");
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
// validating data from Profile Page
function validateProfile() {
  // UserName Validation
  if (userName.value.trim() === "" || userName.value === null) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name is required";
  } else if (userName.value.length < 5 || userName.value.length > 20) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name length between 5 and 20 characters";
  } else if (userName.value.includes(" ")) {
    errorUserName.style.display = "flex";
    errorUserName.textContent = "Name can´t have space";
  } else {
    errorUserName.style.display = "none";
    userData.username = userName.value;
  }

  // Email validation
  if (!userEmail.value.includes("@") || userEmail.value.length > 50) {
    errorEmail.style.display = "flex";
    errorEmail.textContent = "Invalid email";
  } else {
    errorEmail.style.display = "none";
    userData.userEmail = userEmail.value;
  }

  // Password validation
  if(userPassword.value.trim() === "" || userPassword.value === null){
  errorPassword.style.display = "flex";
  errorPassword.textContent = "Required Password";
  } else if (userPassword.value.includes
  ("^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$")
  ) {
    errorPassword.style.display = "flex";
    errorPassword.textContent = "Invalid password";
  } else if (userPassword.value == confirmPassword.value){
    userData.userPassword = confirmPassword.value;
  }
  else {
    errorPassword.style.display = "none";
  }
  // Password confirmation
  if (userPassword.value !== confirmPassword.value) {
    errorConfirmPassword.style.display = "flex";
    errorConfirmPassword.textContent = "Error! different passwords";
  } else {
    errorConfirmPassword.style.display = "none";
    userData.userPassword = confirmPassword.value;
  }
}

function validateAddress() {
  console.log("blur works");
  // First name validation
  if (firstName.value.trim() === "" || firstName.value === null) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent = "First name is required";
  } else if (firstName.value.length > 20) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent =
      "First name must be smaller than 20 characters";
  } else if (firstName.value.includes(" ")) {
    errorfirstName.style.display = "flex";
    errorfirstName.textContent = "First name can´t have space";
  } else {
    errorfirstName.style.display = "none";
    userData.firstName = firstName.value;
  }

  // Last name validation
  if (lastName.value.trim() === "" || lastName.value === null) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name is required";
  } else if (lastName.value.length > 20) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name must be smaller than 20 characters";
  } else if (lastName.value.includes(" ")) {
    errorLastName.style.display = "flex";
    errorLastName.textContent = "Last name can´t have space";
  } else {
    errorLastName.style.display = "none";
    userData.lastName = lastName.value;
  }

  // Address 1 validation
  if (address_1.value.trim() === "" || address_1.value === null) {
    errorAddress_1.style.display = "flex";
    errorAddress_1.textContent = "Address 1 is required";
  } else if (address_1.value.length > 50) {
    errorAddress_1.style.display = "flex";
    address_1.textContent = "Address 1 must be smaller than 50 characters";
  } else {
    errorAddress_1.style.display = "none";
    userData.address_1 = address_1.value;
  }

  // Address 2 validation
  if (address_2.value.length > 50) {
    errorAddress_2.style.display = "flex";
    errorAddress_2.textContent = "Address 2 must be smaller than 50 characters";
  } else {
    errorAddress_2.style.display = "none";
    userData.address_2 = address_2.value;
  }

  // Postal code validation
  if (postalCode.value.trim() === "" || postalCode.value === null) {
    errorPostalCode.style.display = "flex";
    errorPostalCode.textContent = "Postal code is required";
  } else if (postalCode.value.length > 5) {
    errorPostalCode.style.display = "flex";
    errorPostalCode.textContent = "Postal code must be at maximum 5 characters";
  } else {
    errorPostalCode.style.display = "none";
    userData.postalCode = postalCode.value;
  }

  // Country validation
  if (country.value == "Andorra") {
    telCountry.value = "+376";
  } else if (country.value == "Spain") {
    telCountry.value = "+34";
  } else if (country.value == "France") {
    telCountry.value = "+33";
  } else if (country.value == "Germany") {
    telCountry.value = "+49";
  } else if (country.value == "Greece") {
    telCountry.value = "+30";
  }

  //Phone validation
  if (phone.value.trim() === "" || phone.value === null) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone is required";
  } else if (phone.value.length > 9) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone must be at maximum 9 digits";
  } else if (isNaN(phone.value)) {
    phoneError.style.display = "flex";
    phoneError.textContent = "Phone must be a number";
  } else {
    phoneError.style.display = "none";
    userData.phone = telCountry.value + phone.value;
  }
}

console.log(userData);