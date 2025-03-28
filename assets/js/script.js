// const splide = new Splide(".splide", {
//   pagination: false,
//   type: "loop",
// });

// document.querySelector(".custom-btn-next").addEventListener("click", (e) => {
//   splide.go("+1");
// });

// document.querySelector(".custom-btn-prev").addEventListener("click", (e) => {
//   splide.go("-1");
// });
// splide.mount();

const splide = new Splide(".splide", {
  type: "loop",
  rewind: true,
  pagination: false,
  perPage: 1,
  breakpoints: {
    1200: {
      perPage: 2,
    },
    767: {
      perPage: 1,
    },
  },
  gap: "60px",
  arrows: false,
});

document.querySelector(".custom-btn-next").addEventListener("click", (e) => {
  splide.go("+1");
});

document.querySelector(".custom-btn-prev").addEventListener("click", (e) => {
  splide.go("-1");
});

splide.mount();

const images = document.querySelectorAll(".tips-img-box");
images.forEach((image) => {
  image.addEventListener("click", () => {
    images.forEach((img) => img.classList.remove("active"));
    image.classList.add("active");
  });
});

const hamButton = document.querySelector(".mob-head-top .ham-button");
const navList = document.querySelector(".mobile-header .mob-head-bottom");
const lineSvg = document.querySelector(".ham-button .line");
const crossImg = document.querySelector(".ham-button .cross");

hamButton.addEventListener("click", () => {
    navList.classList.toggle("activeNav");

    if (navList.classList.contains("activeNav")) {
        lineSvg.style.display = "none";  // Hide line SVG
        crossImg.style.display = "block"; // Show cross image
    } else {
        lineSvg.style.display = "block"; // Show line SVG
        crossImg.style.display = "none";  // Hide cross image
    }
});