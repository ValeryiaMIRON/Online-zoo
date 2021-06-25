const pandaCard = document.querySelector(".map-card-panda");
const eagleCard = document.querySelector(".map-card-eagle");
const gorillaCard = document.querySelector(".map-card-gorilla");
const alligatorCard = document.querySelector(".map-card-alligator");
const pandaMarker = document.querySelector(".map__panda");
const eagleMarker = document.querySelector(".map__eagle");
const alligatorMarker = document.querySelector(".map__alligator");
const gorillaMarker = document.querySelector(".map__gorilla");
const mapCards = document.querySelectorAll(".map-cards");
const body = document.querySelector("body");

pandaMarker.addEventListener("click", () => {
  gorillaMarker.classList.add("map-active");
  pandaCard.classList.add("map-cards-active");
  eagleCard.classList.remove("map-cards-active");
  alligatorCard.classList.remove("map-cards-active");
  gorillaCard.classList.remove("map-cards-active");
});

alligatorMarker.addEventListener("click", () => {
  gorillaMarker.classList.add("map-active");
  alligatorCard.classList.add("map-cards-active");
  eagleCard.classList.remove("map-cards-active");
  pandaCard.classList.remove("map-cards-active");
  gorillaCard.classList.remove("map-cards-active");
});

eagleMarker.addEventListener("click", () => {
  gorillaMarker.classList.add("map-active");
  eagleCard.classList.add("map-cards-active");
  gorillaCard.classList.remove("map-cards-active");
  alligatorCard.classList.remove("map-cards-active");
  pandaCard.classList.remove("map-cards-active");
});

gorillaMarker.addEventListener("click", () => {
  gorillaMarker.classList.remove("map-active");
  gorillaCard.classList.add("map-cards-active");
  eagleCard.classList.remove("map-cards-active");
  alligatorCard.classList.remove("map-cards-active");
  pandaCard.classList.remove("map-cards-active");
});
//Если карточка отображается, то нажатие в любую область карты, должна скрыть карточку.
body.addEventListener("click", (event) => {
  mapCards.forEach((element) => {
    if (!element.contains(event.target)) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  });
});
