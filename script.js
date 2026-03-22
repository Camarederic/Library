"use strict";

// Navigation
const menuIcon = document.querySelector(".menu-icon");
const container = document.querySelector(".container");

menuIcon.addEventListener("click", () => {
  container.classList.toggle("navigate");
});
// End of Navigation

// Testimonials Slider
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".controls i:nth-child(1)");
const rightArrow = document.querySelector(".controls i:nth-child(2)");
const dotsWrapper = document.querySelector(".dots");
const dots = document.querySelectorAll(".dots span");

let slideIndex = 0;

function setIndex() {
  document.querySelector(".dots .active").classList.remove("active");

  slider.style.transform = `translateX(${slideIndex * -20}%)`;
}

dots.forEach((dot, ind) => {
  dot.addEventListener("click", () => {
    slideIndex = ind;
    setIndex();
    dot.classList.add("active");
  });
});

leftArrow.addEventListener("click", () => {
  slideIndex = slideIndex > 0 ? slideIndex - 1 : 0;
  setIndex();
  dotsWrapper.children[slideIndex].classList.add("active");
});

rightArrow.addEventListener("click", () => {
  slideIndex =
    slideIndex < slides.length - 1 ? slideIndex + 1 : slides.length - 1;
  setIndex();
  dotsWrapper.children[slideIndex].classList.add("active");
});

// End of Testimonials Slider
