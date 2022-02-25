let btn = document.getElementById("searchButton");
let box = document.getElementById("searchBox");

function clickToShow() {
  if ((box.style.width = "400px")) {
    box.style.width = "70px ";
  } else {
    box.style.width = "400px ";
  }
}
btn.onclick = clickToShow;


