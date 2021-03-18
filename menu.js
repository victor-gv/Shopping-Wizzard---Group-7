var menuIcon= document.getElementById('icon-button');
menuIcon.addEventListener('click', togleMenu);

function togleMenu() {
    var x = document.getElementById("modelsNav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }