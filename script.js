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
  modal[i].onclick = function (removeBg) {
    if (removeBg.target === modal[i]) {
      modal[i].style.display = "none";
    }
  };
}
