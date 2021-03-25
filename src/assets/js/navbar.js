/*
 * Initial variables
 */
var menuIcon = document.getElementById("icon-button");

/*
 * Event listeners
 */
menuIcon.addEventListener("click", toggleMenu);

/*
 * Functions
 */
function toggleMenu() {
  var x = document.getElementById("modelsNav");
  if (x.className === "topNav") {
    x.className += " responsive";
  } else {
    x.className = "topNav";
  }
}
