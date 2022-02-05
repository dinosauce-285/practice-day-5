let btn = document.getElementById("searchButton");
let box = document.getElementById("searchBox");
let icon = document.getElementById("searchIcon");
function clickToHide() {
  box.style.width = "70px";
}
btn.onclick = clickToHide;
function clicktoShow() {

box.style.width = "400px";
}
icon.onclick = clicktoShow;
