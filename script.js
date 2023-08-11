"use strict";

const formBtn = document.querySelector(".info__btn");
const formInput = document.querySelector(".form__input");
const formErr = document.querySelector(".info__form-error");

const infoBox = document.querySelector(".info__box");
const imgBox = document.querySelector(".img__box");

const successBox = document.querySelector(".success");
const successText = document.querySelector(".success__text");
const successBtn = document.querySelector(".success__btn");

////////////////////////////////////

formInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent form submission
  }
});

formBtn.addEventListener("click", function () {
  const input = formInput.value;

  if (!input.includes("@") || !input.includes(".")) {
    formErr.style.display = "block";
    formInput.style.backgroundColor = "#ffcccc";
    formInput.style.borderColor = "#cc3333";
  } else {
    // Showing the success container
    infoBox.classList.add("hidden");
    imgBox.classList.add("hidden");
    successBox.classList.remove("hidden");

    successText.innerHTML = `A confirmation email has been sent to
    <strong>${input}</strong>. Please open it and click the
    button inside to confirm your subscription`;
  }
});

// Hiding the success container
successBtn.addEventListener("click", function () {
  successBox.classList.add("hidden");
  infoBox.classList.remove("hidden");
  imgBox.classList.remove("hidden");
});
