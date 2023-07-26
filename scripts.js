let imgBox = document.querySelectorAll(".imgBox");
let contentBox = document.querySelectorAll(".contentBox");

for (let i = 0; i < imgBox.length; i++) {
  if (imgBox[i] && contentBox[i]) {
    imgBox[i].addEventListener("mouseover", function () {
      // Show the corresponding content box
      contentBox[i].classList.add("active");

      // Add active class to the hovered image box
      imgBox[i].classList.add("active");

      // Remove active class from other content boxes and image boxes
      for (let j = 0; j < contentBox.length; j++) {
        if (j !== i) {
          contentBox[j].classList.remove("active");
          imgBox[j].classList.remove("active");
        }
      }
    });
  }
}

var swiper = new Swiper(".slider-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".slide-container", {
  slidesPerView: 4,
  spaceBetween: 20,
  sliderPerGroup: 4,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
  },
});
