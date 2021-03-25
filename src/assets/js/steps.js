/*
 * Initial variables
 */
let currentPage = 1;
let countDown = 5;

/*
 * DOM variables
 */
// Pages
let homePage = document.getElementById("step1");
let formUser = document.getElementById("step2");
let formAddress = document.getElementById("step3");
let shipping = document.getElementById("step4");
let thanksPage = document.getElementById("step5");
let current = document.querySelector(".pageActive");
//Progress bar
let progressContainer = document.getElementById("progressBarContainer");
let progressBar = document.getElementById("progressBar");
// Next buttons
let btnNext = document.getElementById("next");
let btnUser = document.getElementById("next2");
let btnForm = document.getElementById("next3");
let btnShipping = document.getElementById("next4");
let btnFinish = document.getElementById("next5");
let okButton = document.querySelector(".okButton");
let naviBar = document.getElementById("modelsNav");
let termsDisabled = document.getElementById("termsCheck");
// Reset btn
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
let checkGift = document.getElementById("input__gift");
let inputMessage = document.getElementById("inputMessage");
let inputImage = document.getElementById("inputImage");

/*
 * Shipping date variables
 */
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

/*
 * Event Listeners
 */
freeShipping.addEventListener("click", freeF);
function freeF() {
  deliveryExcepted.innerHTML = todayPlus72h + " and " + todayPlus78h + ".";
  personCar.shipping = noCost.innerHTML;
}

extraShipping.addEventListener("click", extraF);
function extraF() {
  deliveryExcepted.innerHTML = todayPlus48h + " and " + todayPlus54h + ".";
  personCar.shipping = extraCost.innerHTML;
}

premiumShipping.addEventListener("click", premiumF);
function premiumF() {
  deliveryExcepted.innerHTML = todayPlus24h + " and " + todayPlus30h + ".";
  personCar.shipping = premiumCost.innerHTML;
}

okButton.addEventListener("click", () => history.go());

btnNext.addEventListener("click", callControl, true);

inputUserForm.forEach((input) => {
  input.addEventListener("blur", validateAllForms);
});

inputAddressForm.forEach((input) => {
  input.addEventListener("blur", validateAllForms);
});

btnResetUser.addEventListener("click", callClear);

/*
 * Event Listeners Functions
 */
function callClear(e) {
  e.target.form.reset();
}

function callControl(e) {
  e.preventDefault();
  controlPage();
}

/*
 * Paging function
 */
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
      if (validateUserForm("formStep2")) {
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
      if (validateUserForm("formStep3")) {
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
      if (validateUserForm("formStep4")) {
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

/*
 * Update Event Listeners functions
 */
function removeCase2() {
  btnUser.removeEventListener("click", callControl, true);
  btnForm.addEventListener("click", callControl, true);
  btnResetUser.removeEventListener("click", callClear);
  btnResetAddress.addEventListener("click", callClear);
  inputUserForm.forEach((input) => {
    input.removeEventListener("blur", validateAllForms);
  });
}

function removeCase3() {
  btnForm.removeEventListener("click", callControl, true);
  btnShipping.addEventListener("click", callControl, true);
  btnResetAddress.removeEventListener("click", callClear);
  btnResetShipping.addEventListener("click", callClear);
  inputAddressForm.forEach((input) => {
    input.removeEventListener("blur", validateAllForms);
  });
  checkGift.addEventListener("click", callGift, true);
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
  checkGift.removeEventListener("click", callGift, true);
}

/*
 * Validation Functions
 */
function validateAllForms(event) {
  var  errorSpan = document.querySelector("#" + event.target.id + "+span");

  if (event.target.name == "confPass") {
    if (event.target.value === person.pass) {
      event.target.classList.remove("error__input");
      if(errorSpan)errorSpan.innerHTML = "";
      event.target.setCustomValidity("");
      person[event.target.name] = event.target.value;
    } else {
      document.getElementById(event.target.id).classList.add("error__input");
      event.target.setCustomValidity("Password Must be Matching.");
      if ((innerHTML = event.target.title))
      if(errorSpan)errorSpan.innerHTML =
          event.target.title;
      else innerHTML = event.target.validationMessage;
    }
  } else {
    if (event.target.validity.valid) {
      if (event.target.name == "country") changePhoneCode(event);
      event.target.classList.remove("error__input");
      if(errorSpan)errorSpan.innerHTML = "";
      person[event.target.name] = event.target.value;
    } else {
      document.getElementById(event.target.id).classList.add("error__input");
      if ((innerHTML = event.target.title))
      if(errorSpan)errorSpan.innerHTML =
          event.target.title;
      else innerHTML = event.target.validationMessage;
    }
  }
}

function validateUserForm(form) {
  return (
    Object.values(document.getElementById(form)).filter(
      (value) => value.checkValidity() === false
    ).length == 0
  );
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

/*
 * Home buttons initializations
 */
function homePageButtons() {
  personCar.productId = document.getElementById("carId").value;
  if (document.querySelector("#Autopilot").checked) {
    personCar.extras.push("Autopilot");
  }
  if (document.querySelector("#Performance").checked) {
    personCar.extras.push("Performance");
  }
  personCar.color = document.getElementById("colorId").value;
  personCar.price = carPrice.textContent;
  hoverImageContainer.removeEventListener("click", changeMainImage);
  colorContainer.removeEventListener("click", changeColor);

  navBar.removeEventListener("click", navBarFunctions);
  menuIcon.removeEventListener("click", toggleMenu);
}

/*
 * Other Functions
 */

function activateCount() {
  naviBar.classList.add("displayNone");
  // Pop up message every minute
  let timer60s = setInterval(() => {
    let minutesLeft = document.getElementById("minutesLeft");
    timeOutPop1m.classList.toggle("displayNone");
    countDown--;
    minutesLeft.innerHTML = countDown;
    if (countDown < 2) {
      clearInterval(timer60s); // Doesn't show the message after 1 minute left
    }
    let timer5s2 = setTimeout(() => { // hides it in 5 seconds
      timeOutPop1m.classList.toggle("displayNone");
    }, 5000); //5s
  }, 60000); //60s
  let timer5m = setTimeout(() => { // 5 minuts countdown from step 1
    timeOutPop.classList.toggle("displayNone");
    let timer5s = setTimeout(() => { // resets to main page in 5 seconds
      timeOutPop.classList.toggle("displayNone");
      clearAll();
      // reloads the page
    }, 5000); //5s
  }, 300000); //5m
}

function clearAll() {
  history.go();
}

function btnDisabled() {
  termsDisabled.checked
    ? (btnFinish.disabled = false)
    : (btnFinish.disabled = true);
}

function changePhoneCode(event) {
  let phoneCodeOp = document.getElementById("phoneCode");
  phoneCodeOp.options.selectedIndex = event.target.options.selectedIndex;
  person.phoneCode = phoneCodeOp.value;
  addressFormIsValid.phoneCode = true;
}

function callGift(event) {
  if (event.target.checked == true) {
    inputMessage.style.display = "block";
    inputImage.style.display = "block";
  } else {
    inputMessage.style.display = "none";
    inputImage.style.display = "none";
  }
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

window.showPurchaseInfo = function () {
  let productModel = document.getElementById("productModel");
  let productColor = document.getElementById("productColor");
  let productDeliveryTime = document.getElementById("productDeliveryTime");
  let yourOrderCost = document.getElementById("yourOrderCost");
  let yourOrderShippingCost = document.getElementById("yourOrderShippingCost");
  let yourOrderTotalCost = document.getElementById("yourOrderTotalCost");
  let personShippingStr = parseFloat(personCar.price.slice(0, -1));
  let finalProductImage = document.querySelector(".finalProductImage");

  finalProductImage.src = mainImage.src;
  productModel.innerHTML = personCar.productId.toUpperCase();
  productColor.innerHTML = personCar.color.toUpperCase();
  productDeliveryTime.innerHTML = deliveryExcepted.innerHTML.slice(0, 17);
  yourOrderCost.innerHTML = personShippingStr.toLocaleString() + "€";
  yourOrderShippingCost.innerHTML = personCar.shipping;
  yourOrderTotalCost.innerHTML = totalCost() + "€";
};

