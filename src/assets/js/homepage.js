// window.onload = function () {
/*
 * Initial variables
 */
var mainImage = document.getElementById("mainImage");
var carName = document.getElementById("carName");
var carPrice = document.getElementById("carPrice");
var colorContainer = document.getElementById("colorContainer");
var carSpecs = document.getElementById("carSpecs");
var carExtras = document.getElementById("carExtras");
var hoverImageContainer = document.getElementById("hover-column");
var modelsNav = document.getElementById("modelsNav");

/*
 * Event listeners
 */
hoverImageContainer.addEventListener("click", changeMainImage);
colorContainer.addEventListener("click", changeColor);
modelsNav.addEventListener("click", navBarFunctions);

/*
 * Page first load
 */
firstLoad();

/*
 * Functions
 */

function firstLoad() {
  var carId = "model-s";
  changeCarInfo(carId);
}

function changeMainImage(e) {
  if (e.target.id != "hover-column") {
    mainImage.src = e.target.src;
  }
}

function changeColor(e) {
  if (e.target.id != "colorContainer") {
    var car = cars.filter(
      (car) => car.id == document.getElementById("carId").value
    );

    document.getElementById("colorId").value = e.target.id;

    var index;
    car[0].color.forEach(function (value, i) {
      if (e.target.value == value.id) {
        index = i;
      }
    });

    mainImage.src = car[0].color[index].img[0];
    hoverImageContainer.innerHTML = "";
    car[0].color[index].img.forEach((img) => {
      let i = document.createElement("img");
      i.setAttribute("class", "clickable");
      i.setAttribute("src", img);
      hoverImageContainer.appendChild(i);
    });
  }
}

function navBarFunctions(e) {
  if (e.target.value) {
    carId = e.target.value;
    changeCarInfo(carId);
  }
}

function changeCarInfo(carId) {
  var car = cars.filter((c) => {
    return c.id == carId;
  });

  document.getElementById("carId").value = car[0].id;

  mainImage.src = car[0].color[0].img[0];
  hoverImageContainer.innerHTML = "";
  car[0].color[0].img.forEach((imag) => {
    let i = document.createElement("img");
    i.setAttribute("class", "clickable");
    i.setAttribute("src", imag);
    hoverImageContainer.appendChild(i);
  });
  carName.innerHTML = car[0].name;
  carPrice.innerHTML = car[0].price + "€";
  colorContainer.innerHTML =
    "<input name='colorId' id='colorId' type='hidden' value='" +
    car[0].color[0].id +
    "'>";
  car[0].color.forEach((c, index) => {
    let btn = document.createElement("button");
    btn.setAttribute("id", c.id);
    btn.setAttribute("class", "colorButton clickable");
    btn.setAttribute("value", c.id);
    btn.setAttribute("style", "background-color:" + c.hex);
    colorContainer.appendChild(btn);
  });
  carSpecs.innerHTML = "";
  car[0].specs.forEach((s) => {
    let spec = document.createElement("h3");
    let value = document.createElement("p");
    spec.innerHTML = s.name;
    value.innerHTML = s.value;
    value.setAttribute("class", "specValue");
    carSpecs.appendChild(spec);
    carSpecs.appendChild(value);
  });
  carExtras.innerHTML = "";
  car[0].extras.forEach((extra) => {
    let check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "clickable");
    check.setAttribute("id", extra.name);
    check.setAttribute("name", extra.name);
    check.setAttribute("value", extra.name);
    let lab = document.createElement("label");
    let s = document.createElement("strong");
    s.innerHTML = extra.name;
    lab.setAttribute("for", extra.name);
    lab.appendChild(s);
    lab.innerHTML += " " + extra.price + "€";
    carExtras.appendChild(check);
    carExtras.appendChild(lab);
    carExtras.innerHTML += "<br><br>";
  });
}
// };
