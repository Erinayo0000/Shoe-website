"use strict";
const modal = document.querySelectorAll(".modal");
const button = document.querySelectorAll(".view");
const span = document.querySelectorAll(".close");
button.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
