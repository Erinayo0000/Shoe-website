"use strict";
const modal = document.querySelectorAll(".modal");
const button = document.querySelectorAll(".view");
const span = document.querySelectorAll(".close");

for (let i = 0; i < button.length; i++) {
  button[i].onclick = function () {
    modal[i].style.display = "block";
  };
  span[i].onclick = function () {
    modal[i].style.display = "none";
  };
}

window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
