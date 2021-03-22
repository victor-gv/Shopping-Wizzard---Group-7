var menuIcon = document.getElementById("icon-button");
menuIcon.addEventListener("click", toggleMenu);

function toggleMenu() {
  var x = document.getElementById("modelsNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
