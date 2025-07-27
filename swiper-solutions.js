const swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000, // 3 seconds between slides
    disableOnInteraction: false, // keeps autoplay running after interactions
  },
});

