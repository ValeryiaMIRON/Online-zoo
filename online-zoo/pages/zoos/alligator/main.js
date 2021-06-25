const populationMinus = document.querySelector(
  ".facts-tpopulation-title__minus"
);
const regionMinus = document.querySelector(".facts-region-title__minus");
const nutritionMinus = document.querySelector(".facts-nutrition-title__minus");
const populationTitle = document.querySelector(".facts-tpopulation-title");
const populationSubtitle = document.querySelector(
  ".facts-spopulation-subtitle"
);
const regionTitle = document.querySelector(".facts-region-title");
const regionSubtitle = document.querySelector(".facts-region-subtitle");
const nutritionTitle = document.querySelector(".facts-nutrition-title");
const nutritionSubtitle = document.querySelector(".facts-nutrition-subtitle");
const populationPlus = document.querySelector(".facts-tpopulation-title__plus");
const regionPlus = document.querySelector(".facts-region-title__plus");
const nutritionPlus = document.querySelector(".facts-nutrition-title__plus");

populationMinus.addEventListener("click", () => {
  populationTitle.classList.remove("facts-tpopulation-title");
  populationTitle.classList.add("change-title-color");
  populationSubtitle.style.display = "none";
  populationMinus.style.visibility = "hidden";
  populationPlus.classList.remove("facts-tpopulation-title__plus");
  populationPlus.classList.add("populationPlus");
});

regionMinus.addEventListener("click", () => {
  regionTitle.classList.remove("facts-region-title");
  regionTitle.classList.add("change-title-color");
  regionSubtitle.style.display = "none";
  regionMinus.style.visibility = "hidden";
  regionPlus.classList.add("regionPlus");
  regionPlus.classList.remove("facts-region-title__plus");
});

nutritionMinus.addEventListener("click", () => {
  nutritionTitle.classList.remove("facts-nutrition-title");
  nutritionTitle.classList.add("change-title-color");
  nutritionSubtitle.style.display = "none";
  nutritionMinus.style.visibility = "hidden";
  nutritionPlus.classList.remove("facts-nutrition-title__plus");
  nutritionPlus.classList.add("nutritionPlus");
});
// раскрытие
nutritionPlus.addEventListener("click", () => {
  nutritionTitle.classList.add("facts-nutrition-title");
  nutritionTitle.classList.remove("change-title-color");
  nutritionSubtitle.style.display = "block";
  nutritionPlus.style.visibility = "hidden";
  nutritionMinus.style.visibility = "visible";
});

regionPlus.addEventListener("click", () => {
  regionTitle.classList.add("facts-region-title");
  regionTitle.classList.remove("change-title-color");
  regionSubtitle.style.display = "block";
  regionPlus.style.visibility = "hidden";
  regionMinus.style.visibility = "visible";
});

populationPlus.addEventListener("click", () => {
  populationTitle.classList.add("facts-tpopulation-title");
  populationTitle.classList.remove("change-title-color");
  populationSubtitle.style.display = "block";
  populationPlus.style.visibility = "hidden";
  populationMinus.style.visibility = "visible";
});
