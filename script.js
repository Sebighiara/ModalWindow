"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const modal = document.querySelector(".modal");
const btnCloseModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener("click", showModal);

btnCloseModal.addEventListener("click", hideModal);

overlay.addEventListener("click", hideModal);

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape") {
    if (!modal.classList.contains("hidden")) {
      hideModal();
    }
  }
});
