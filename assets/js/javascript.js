function activateCount() {
  navibar.classList.add("displayNone");
  // Pop up message every minute
  let timer60s = setInterval(() => {
    let minutesLeft = document.getElementById("minutesLeft");
    timeOutPop1m.classList.toggle("displayNone");
    countDown--;
    minutesLeft.innerHTML = countDown;
    if (countDown < 2) {
      clearInterval(timer60s);
    } // Doesn't show the message after 1 minute left
    let timer5s2 = setTimeout(() => {
      // hides it in 5 seconds
      timeOutPop1m.classList.toggle("displayNone");
    }, 5000); // 5s
  }, 60000); // 60s;
  let timer5m = setTimeout(() => {
    // 5 minuts countdown from step 1
    timeOutPop.classList.toggle("displayNone");
    let timer5s = setTimeout(() => {
      // resets to main page in 5 seconds
      timeOutPop.classList.toggle("displayNone");
      clearAll();
      // reloads the page
    }, 5000); //5s
  }, 300000); // 5m
}

function clearAll() {
  history.go();
}

let allInputs = document.querySelectorAll("input");
allInputs.forEach((e) => {
  e.addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      event.preventDefault();
      document.getElementById(e.id).click();
    }
  });
});

let currentPage = 1;
let countDown = 5;
// Pages
let homePage = document.getElementById("step1");
let formUser = document.getElementById("step2");
let formAddress = document.getElementById("step3");
let shipping = document.getElementById("step4");
let thanksPage = document.getElementById("step5");
// display: none; class
let current = document.querySelector(".pageActive");
//Progress bar
let progressContainer = document.getElementById("progressBarContainer");
let progressBar = document.getElementById("progressBar");
// next buttons
let btnNext = document.getElementById("next");
let btnUser = document.getElementById("next2");
let btnForm = document.getElementById("next3");
let btnShipping = document.getElementById("next4");
let btnFinish = document.getElementById("next5");
let okButton = document.querySelector(".okButton");
let navibar = document.getElementById("modelsNav");
let termsDisabled = document.getElementById("termsCheck");
// reset btn
let btnResetUser = document.getElementById("clear2");
let btnResetAddress = document.getElementById("clear3");
let btnResetShipping = document.getElementById("clear4");
// timeOutPop
let timeOutPop = document.getElementById("timeOut5m");
let timeOutPop1m = document.getElementById("timeOut60s");
// terms and conditions
let termsCheck = document.getElementById("termsCheck");

let inputUserForm = document.querySelectorAll(".formUser__input");
let inputAddressForm = document.querySelectorAll(".formAddress__input");
let purchaseFinal = document.getElementById("purchaseCheckbox");

// shippingType
let deliveryExcepted = document.getElementById("deliveryExcepted");
let freeShipping = document.getElementById("freeShipping");
let extraShipping = document.getElementById("extraShipping");
let premiumShipping = document.getElementById("premiumShipping");
let premiumCost = document.getElementById("premiumCost");
let extraCost = document.getElementById("extraCost");
let noCost = document.getElementById("noCost");

// premium shipping
let date = new Date();
let todayPlus24h = new Date(date.setDate(date.getDate() + 1))
  .toString()
  .slice(4, 21);
let todayPlus30h = new Date(date.setTime(date.getTime() + 6 * 60 * 60 * 1000))
  .toString()
  .slice(4, 21);
// extra shipping
date = new Date();
let todayPlus48h = new Date(date.setDate(date.getDate() + 2))
  .toString()
  .slice(4, 21);
let todayPlus54h = new Date(date.setTime(date.getTime() + 6 * 60 * 60 * 1000))
  .toString()
  .slice(4, 21);
// free shipping
date = new Date();
let todayPlus72h = new Date(date.setDate(date.getDate() + 3))
  .toString()
  .slice(4, 21);
let todayPlus78h = new Date(date.setTime(date.getTime() + 6 * 60 * 60 * 1000))
  .toString()
  .slice(4, 21);

// Free Shipping
freeShipping.addEventListener("click", freeF);
function freeF() {
  deliveryExcepted.innerHTML = todayPlus72h + " and " + todayPlus78h + ".";
  personCar.shipping = noCost.innerHTML;
}
// Extra Shipping
extraShipping.addEventListener("click", extraF);
function extraF() {
  deliveryExcepted.innerHTML = todayPlus48h + " and " + todayPlus54h + ".";
  personCar.shipping = extraCost.innerHTML;
}
// Premium Shipping
premiumShipping.addEventListener("click", premiumF);
//() => {    deliveryExcepted.innerHTML = todayPlus24h + ' and ' + todayPlus30h + '.'}
function premiumF() {
  deliveryExcepted.innerHTML = todayPlus24h + " and " + todayPlus30h + ".";
  personCar.shipping = premiumCost.innerHTML;
}

// OK button from pop up message
okButton.addEventListener("click", () => history.go());

btnNext.addEventListener("click", callControl, true);

inputUserForm.forEach((input) => {
  input.addEventListener("blur", validateAllForms);
});

inputAddressForm.forEach((input) => {
  input.addEventListener("blur", validateAllForms);
});

btnResetUser.addEventListener("click", callClear);

function callClear(e) {
  e.target.form.reset();
}

function callControl(e) {
  e.preventDefault();
  controlPage();
}
function controlPage() {
  if (currentPage === 1) {
    activateCount();
  }
  switch (currentPage) {
    case 1:
      homePageButtons();
      btnNext.removeEventListener("click", callControl, true);
      btnUser.addEventListener("click", callControl, true);
      homePage.classList.toggle("pageActive");
      formUser.classList.toggle("pageActive");
      progressContainer.style.display = "block";
      progressBar.style.height = "10%";
      progressBar.style.marginTop = "90%";
      currentPage++;
      break;
    case 2:
      if (validateUserForm('formStep2')) {
        removeCase2();
        formUser.classList.toggle("pageActive");
        formAddress.classList.toggle("pageActive");
        progressContainer.style.display = "block";
        progressBar.style.height = "38%";
        progressBar.style.marginTop = "62%";
        currentPage++;
        break;
      } else {
        document
          .querySelector(".formUser p")
          .classList.toggle("errorMessageActive");
        setTimeout(
          () =>
            document
              .querySelector(".formUser p")
              .classList.toggle("errorMessageActive"),
          3000
        );
        break;
      }
    case 3:
      if (validateUserForm('formStep3')) {
        removeCase3();
        formAddress.classList.toggle("pageActive");
        shipping.classList.toggle("pageActive");
        progressContainer.style.display = "block";
        progressBar.style.height = "67%";
        progressBar.style.marginTop = "33%";
        currentPage++;
      } else {
        document
          .querySelector(".errorAddressMessage")
          .classList.toggle("errorMessageActive");
        setTimeout(
          () =>
            document
              .querySelector(".errorAddressMessage")
              .classList.toggle("errorMessageActive"),
          3000
        );
        break;
      }
      break;
    case 4:
      if (validateUserForm('formStep4')) {
        removeCase4();
        shipping.classList.toggle("pageActive");
        thanksPage.classList.toggle("pageActive");
        progressContainer.style.display = "block";
        progressBar.style.height = "100%";
        progressBar.style.marginTop = "0%";
        showPurchaseInfo();
        currentPage++;
        break;
      } else {
        document
          .querySelector(".errorShippingMessage")
          .classList.toggle("errorMessageActive");
        setTimeout(
          () =>
            document
              .querySelector(".errorShippingMessage")
              .classList.toggle("errorMessageActive"),
          3000
        );
        break;
      }
    case 5:
      let thankYou = document.createElement("p");
      thankYou.className = "thankYou";
      thankYou.innerHTML = "Thank you for your purchase :)";
      purchaseFinal.innerHTML = "";
      purchaseFinal.appendChild(thankYou);
      btnFinish.classList.add("displayNone");
      setTimeout(() => clearAll(), 5000);
      break;
  }
}
function removeCase2() {
  btnUser.removeEventListener("click", callControl, true);
  btnForm.addEventListener("click", callControl, true);
  btnResetUser.removeEventListener("click", callClear);
  btnResetAddress.addEventListener("click", callClear);
  inputUserForm.forEach((input) => {
    input.removeEventListener("blur", validateAllForms);
  });
}

function btnDisabled() {
  termsDisabled.checked
    ? (btnFinish.disabled = false)
    : (btnFinish.disabled = true);
}

function removeCase3() {
  btnForm.removeEventListener("click", callControl, true);
  btnShipping.addEventListener("click", callControl, true);
  btnResetAddress.removeEventListener("click", callClear);
  btnResetShipping.addEventListener("click", callClear);
  inputAddressForm.forEach((input) => {
    input.removeEventListener("blur", validateAllForms);
  });
}

function removeCase4() {
  btnShipping.removeEventListener("click", callControl, true);
  btnFinish.addEventListener("click", callControl, true);
  btnResetShipping.removeEventListener("click", callClear);
  freeShipping.removeEventListener("click", freeF);
  extraShipping.removeEventListener("click", extraF);
  premiumShipping.removeEventListener("click", premiumF);
  termsDisabled.addEventListener("change", btnDisabled);
  termsDisabled.addEventListener("change", () => {
    btnFinish.classList.toggle("pButtonColorGreen");
  });
}

/*function clearReset() {
  switch (currentPage) {
    case 2:
      document
        .querySelectorAll(".formUser__field input")
        .forEach((e) => (e.value = ""));
      break;
    case 3:
      document
        .querySelectorAll(".formAddress__field input")
        .forEach((e) => (e.value = ""));
      document
        .querySelectorAll(".formAddress__field input")
        .forEach((e) => (e.checked = false));
      break;
    case 4:
      document
        .querySelectorAll(".formShipping__input input")
        .forEach((e) => (e.checked = false));
      document.querySelectorAll("#inputMessage textarea")[0].value = "";
      document.querySelectorAll(
        ".formShippingInfo label input"
      )[0].checked = false;
      break;
  }
}*/

/* START OF VALIDATION FORMS */
function validateAllForms(event) {
  if (event.target.name == "confPass") {
    if (event.target.value === person.pass) {
      event.target.classList.remove("error__input"); // set erase attribute in case that does not remove by itself.
      document.querySelector("#" + event.target.id + "+span").innerHTML = ""; // Remove content in error span
      event.target.setCustomValidity('');
      person[event.target.name] = event.target.value;
      //userFormIsValid.confPass = true;
    } else {
      document.getElementById(event.target.id).classList.add("error__input");
      event.target.setCustomValidity('Password Must be Matching.');
      if ((innerHTML = event.target.title))
        document.querySelector("#" + event.target.id + "+span").innerHTML =
          event.target.title;
      else innerHTML = event.target.validationMessage;
    }
    return;
  }

  if (event.target.validity.valid) {
    event.target.classList.remove("error__input"); // set erase attribute in case that does not remove by itself.
    document.querySelector("#" + event.target.id + "+span").innerHTML = ""; // Remove content in error span
    person[event.target.name] = event.target.value;
    //userFormIsValid[event.target.name] = true;
  } else {
    document.getElementById(event.target.id).classList.add("error__input");
    if ((innerHTML = event.target.title))
      document.querySelector("#" + event.target.id + "+span").innerHTML =
        event.target.title;
    else innerHTML = event.target.validationMessage;
  }

  /*
    const usernameRegex = /^[a-zA-Z0-9]{3,20}$/
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegex = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=~`|:"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,20}/;
    const firstLastNameRegex = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
    const postCodeRegex = /^\d{5}$/
    const phoneRegex = /^\d{9}$/
    switch (event.target.name) {
        case "username":
            if (usernameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                document.querySelector('#'+event.target.id+'+span').innerHTML=""; // Remove content in error span
                person.username = event.target.value;
                userFormIsValid.username = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input");
                document.querySelector('#'+event.target.id+'+span').innerHTML=event.target.validationMessage;
                //event.target.value = "";
                //document.getElementById(event.target.id).setAttribute("placeholder", "Minimum 3 characters, only numbers and letters")
            }
            break;
        case "email":
            //email
            if (emailRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                document.querySelector('#'+event.target.id+'+span').innerHTML=""; // Remove content in error span
                person.email = event.target.value;
                userFormIsValid.email = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input");
                document.querySelector('#'+event.target.id+'+span').innerHTML="Missing email";
                //event.target.value = "";
                //document.getElementById(event.target.id).setAttribute("placeholder", "Missing email")
            };
            break;
        case "pass":
            if (passwordRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                document.querySelector('#'+event.target.id+'+span').innerHTML=""; // Remove content in error span
                person.pass = event.target.value
                userFormIsValid.pass = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input");
                document.querySelector('#'+event.target.id+'+span').innerHTML="Not enough secure";
                //event.target.value = "";
                //document.getElementById(event.target.id).setAttribute("placeholder", "Not enough secure")
            }
            break;
        case "confPass":
            //same password
            if (event.target.value == person.pass && event.target.value != "") {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.confPass = event.target.value
                userFormIsValid.confPass = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Not the same")
            }
            break;
        case "firstName":
            if (firstLastNameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.firstName = event.target.value
                addressFormIsValid.firstName = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put your real name")
            }
            break;
        case "lastName":
            if (firstLastNameRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.lastName = event.target.value
                addressFormIsValid.lastName = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put your real Last name")
            }
            break;
        case "birthday":
            if (event.target.validity.valid) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.birthday = event.target.value
                addressFormIsValid.birthday = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put a real birthday")
            }
            break;
        case "address-1":
            //Max. length: 50
            if (event.target.value.length <= 50) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.address1 = event.target.value
                addressFormIsValid.address = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put an Address, maybe Narnia?")
            }
            break;
        case "address-2":
            //Max. length: 50
            if (event.target.value.length <= 50) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.address2 = event.target.value
                addressFormIsValid.address = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Put another Address, maybe Mordor?")
            }
            break;
        case "postalCode":
            //Max. length: 50
            if (postCodeRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.postalCode = event.target.value
                addressFormIsValid.postalCode = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Do not put area 51")
            }
            break;
        case "country":
            if(event.target.value!="unselected"){
                document.getElementById(event.target.id).classList.remove("error__input")
                person.country = event.target.value
                addressFormIsValid.country = true;
                changePhonecode(event);
                break;
            }else{
                addressFormIsValid.country = false;
                document.getElementById(event.target.id).classList.add("error__input")
            }
        case "phoneCode":
            if(event.target.value!="unselected"){
                document.getElementById(event.target.id).classList.remove("error__input")
                person.phoneCode = event.target.value
                addressFormIsValid.phoneCode = true;
                break;
            }else{
                addressFormIsValid.phoneCode = false;
                document.getElementById(event.target.id).classList.add("error__input")
            }
        case "phone":
            //Max. length: 50
            if (phoneRegex.test(event.target.value)) {
                document.getElementById(event.target.id).classList.remove("error__input") /// set erase attribute in case that does not remove by itself.
                person.phone = event.target.value
                addressFormIsValid.phone = true;
            } else {
                document.getElementById(event.target.id).classList.add("error__input")
                event.target.value = "";
                document.getElementById(event.target.id).setAttribute("placeholder", "Add a real number")
            }
            break;
        case "regularAddress":
            person.regularAddress = event.target.checked
            addressFormIsValid.regularAddress = true;
            break;
        
    }*/
}

/*function changePhonecode(event) {
  let phoneCodeop = document.getElementById("phoneCode");
  phoneCodeop.options.selectedIndex = event.target.options.selectedIndex;
  person.phoneCode = phoneCodeop.value;
  addressFormIsValid.phoneCode = true;
}*/

/* END OF VALIDATION FORMS */

function validateUserForm(form) {
  return (
    
    Object.values(document.getElementById(form)).filter((value) => value.checkValidity() === false).length ==
    0
  );
}

/*function validateFormAddress(event) {
  return (
    Object.values(event.target.form).filter((value) => value === false)
      .length == 0
  );
}*/

function homePageButtons() {
  personCar.productId = carId;
  if (document.querySelector("#Autopilot").checked) {
    personCar.extras.push("Autopilot");
  }
  if (document.querySelector("#Performance").checked) {
    personCar.extras.push("Performance");
  }
  personCar.color = colorValue;
  personCar.price = carPrice.textContent;
  hoverImageContainer.removeEventListener("click", changeMainImage);
  colorContainer.removeEventListener("click", changeColor);

  /* modelContainer was deleted */
  //modelContainer.removeEventListener('click', changeCar);

  navBar.removeEventListener("click", navBarFunctions);
  menuIcon.removeEventListener("click", toggleMenu);
}

function validateShipping() {
  let validate = false;
  if (freeShipping.checked) {
    personCar.type = freeShipping.id;
    validate = true;
  } else if (extraShipping.checked) {
    personCar.type = extraShipping.id;
    validate = true;
  } else if (premiumShipping.checked) {
    personCar.type = premiumShipping.id;
    validate = true;
  }
  personCar.date = deliveryExcepted.textContent;
  if (document.getElementById("input__gift").checked) {
    personCar.gift = true;
    personCar.giftMessage = document.getElementById("gift").textContent;
  }
  return validate;
}

function totalCost() {
  let extrasC = 0.0;
  if (personCar.extras.length === 2) {
    extrasC += 24490;
  } else if (personCar.extras[0] === "Autopilot") {
    extrasC += 7500;
  } else if (personCar.extras[0] === "Performance") {
    extrasC += 16990;
  }
  if (personCar.shipping === "Free") {
    let total = parseFloat(personCar.price) + extrasC;
    return total;
  } else {
    let total =
      parseFloat(personCar.price.slice(0, -1)) +
      extrasC +
      parseFloat(personCar.shipping.slice(0, -1));
    total = total.toLocaleString();
    return total;
  }
}
