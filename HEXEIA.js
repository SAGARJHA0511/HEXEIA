// script.js

document.getElementById("submit-form").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for submitting your query! We will get back to you soon.");
    this.reset();
  });

  const slides = document.querySelectorAll('.sliderContainer > div');
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove('active');

  currentSlide = (currentSlide + 1) % slides.length;

  slides[currentSlide].classList.add('active');
}, 3000);

