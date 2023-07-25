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

/*==============================
        About Tab List
==============================*/
const visionBtn = document.querySelector("[data-tab-vision]");
const missionBtn = document.querySelector("[data-tab-mission]");
const strategyBtn = document.querySelector("[data-tab-strategy]");
const tabtext = document.querySelector("[data-tab-text]");

const visionBtnActive = function () {
  visionBtn.classList.add("active");
  missionBtn.classList.remove("active");
  strategyBtn.classList.remove("active");
  tabtext.innerHTML =
    "Aliquam faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum";
};

const missionBtnActive = function () {
  missionBtn.classList.add("active");
  visionBtn.classList.remove("active");
  strategyBtn.classList.remove("active");
  tabtext.innerHTML =
    "Faucibus, odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,";
};

const strategyBtnActive = function () {
  strategyBtn.classList.add("active");
  visionBtn.classList.remove("active");
  missionBtn.classList.remove("active");
  tabtext.innerHTML =
    "Odio nec commodo aliquam, neque felis placerat dui, a porta ante lectus dapibus est. Aliquam a bibendum mi, sed condimentum";
};

addEventOnElem(missionBtn, "click", missionBtnActive);
addEventOnElem(visionBtn, "click", visionBtnActive);
addEventOnElem(strategyBtn, "click", strategyBtnActive);
