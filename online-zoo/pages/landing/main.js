// burger handler

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header-nav");
  const menuCloseItem = document.querySelector(".header-nav-close");
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header-nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header-nav_active");
  });
})();

// карусель для блока famous-pets

let famousPetsCards = document.querySelectorAll(".famous-pets-cards");
let currentCards = 0;
let isAnabled = true;

function changeCurrentCards(n) {
  currentCards = (n + famousPetsCards.length) % famousPetsCards.length;
}

function hideCards(direction) {
  isAnabled = false;
  famousPetsCards[currentCards].classList.add(direction);
  famousPetsCards[currentCards].addEventListener("animationend", function () {
    this.classList.remove("active", direction);
  });
}

function showCards(direction) {
  famousPetsCards[currentCards].classList.add("next", direction);
  famousPetsCards[currentCards].addEventListener("animationend", function () {
    this.classList.remove("next", direction);
    this.classList.add("active");
    isAnabled = true;
  });
}

function previousCards(n) {
  hideCards("to-right");
  changeCurrentCards(n - 1);
  showCards("from-left");
}

function nextCards(n) {
  hideCards("to-left");
  changeCurrentCards(n + 1);
  showCards("from-right");
}

document.querySelector(".slider-left").addEventListener("click", function () {
  if (isAnabled) {
    previousCards(currentCards);
  }
});

document.querySelector(".slider-right").addEventListener("click", function () {
  if (isAnabled) {
    nextCards(currentCards);
  }
});

//popup

const feedbackElem = document.getElementById("feedback");
const formElem = document.getElementById("feedback-form");
const feedbackBtn = document.getElementById("leave-feedback");
const sendBtn = document.getElementById("send");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const textField = document.getElementById("review");

const validate = () => {
  if (
    nameField.validity.valid &&
    emailField.validity.valid &&
    textField.validity.valid
  ) {
    sendBtn.classList.remove("invalid");
  } else {
    sendBtn.classList.add("invalid");
  }
};

feedbackBtn.addEventListener("click", () => {
  document.body.classList.add("notScrollable");
  feedbackElem.classList.remove("hidden");
  formElem.classList.remove("hidden");
});

feedbackElem.addEventListener("click", () => {
  document.body.classList.remove("notScrollable");
  feedbackElem.classList.add("hidden");
  formElem.classList.add("hidden");
});

sendBtn.addEventListener("click", () => {
  if (sendBtn.classList.contains("invalid")) return;
  document.body.classList.remove("notScrollable");
  feedbackElem.classList.add("hidden");
  formElem.classList.add("hidden");
});

nameField.addEventListener("input", () => {
  validate();
});

emailField.addEventListener("input", () => {
  validate();
});

textField.addEventListener("input", () => {
  validate();
});

//Карточка животного в блоке Zoogeography
const pandaCard = document.querySelector(".zoogeography-panda");
const eagleCard = document.querySelector(".zoogeography-eagle");
const gorillaCard = document.querySelector(".zoogeography-gorilla");
const alligatorCard = document.querySelector(".zoogeography-alligator");
const pandaMarker = document.querySelector(".zoogeography-map__panda");
const eagleMarker = document.querySelector(".zoogeography-map__eagle");
const alligatorMarker = document.querySelector(".zoogeography-map__alligator");
const gorillaMarker = document.querySelector(".zoogeography-map__gorilla");

pandaMarker.addEventListener("click", () => {
  eagleMarker.classList.add("zoogeography-active");
  pandaCard.classList.add("zoogeography-card-active");
  eagleCard.classList.remove("zoogeography-card-active");
  alligatorCard.classList.remove("zoogeography-card-active");
  gorillaCard.classList.remove("zoogeography-card-active");
});

alligatorMarker.addEventListener("click", () => {
  eagleMarker.classList.add("zoogeography-active");
  alligatorCard.classList.add("zoogeography-card-active");
  eagleCard.classList.remove("zoogeography-card-active");
  pandaCard.classList.remove("zoogeography-card-active");
  gorillaCard.classList.remove("zoogeography-card-active");
});

gorillaMarker.addEventListener("click", () => {
  eagleMarker.classList.add("zoogeography-active");
  gorillaCard.classList.add("zoogeography-card-active");
  eagleCard.classList.remove("zoogeography-card-active");
  alligatorCard.classList.remove("zoogeography-card-active");
  pandaCard.classList.remove("zoogeography-card-active");
});

eagleMarker.addEventListener("click", () => {
  eagleCard.classList.add("zoogeography-card-active");
  gorillaCard.classList.remove("zoogeography-card-active");
  alligatorCard.classList.remove("zoogeography-card-active");
  pandaCard.classList.remove("zoogeography-card-active");
});

//testimonials slider

let testimonialsCards = document.querySelectorAll(".testimonials-review-item");
let curCards = 0;
let anabled = true;
let timer;

function changeCurCards(n) {
  curCards = (n + testimonialsCards.length) % testimonialsCards.length;
}

function hideReviews(direction) {
  anabled = false;
  testimonialsCards[curCards].classList.add(direction);
  testimonialsCards[curCards].addEventListener("animationend", function () {
    this.classList.remove("testimonials-active", direction);
  });
}

function showReviews(direction) {
  testimonialsCards[curCards].classList.add("testimonials-next", direction);
  testimonialsCards[curCards].addEventListener("animationend", function () {
    this.classList.remove("testimonials-next", direction);
    this.classList.add("testimonials-active");
    anabled = true;
  });
}

function previousReview(n) {
  hideReviews("to-right");
  changeCurCards(n - 1);
  showReviews("from-left");
}

function nextReview(n) {
  hideReviews("to-left");
  changeCurCards(n + 1);
  showReviews("from-right");
}

document
  .querySelector(".testimonials-slider-left")
  .addEventListener("click", function () {
    if (anabled) {
      clearInterval(autoSliderInterval);
      previousReview(curCards);
    }
  });

document
  .querySelector(".testimonials-slider-right")
  .addEventListener("click", function () {
    if (anabled) {
      clearInterval(autoSliderInterval);

      nextReview(curCards);
      timer = setInterval(() => {
        nextReview(curCards);
      }, 20000);
    }
  });

let autoSliderInterval = setInterval(() => {
  nextReview(curCards);
}, 10000);
