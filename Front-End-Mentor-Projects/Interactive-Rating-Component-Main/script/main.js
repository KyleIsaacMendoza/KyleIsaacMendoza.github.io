import { addRating, value, review } from "./function.js";

const myForm = document.getElementById("myForm");
const rate_button = document.getElementsByTagName("input");

//I think its better if i use ID to this one
const main = document.getElementsByClassName("main-container");

//Rating Score when SUBMITTED
const rating_score = document.getElementById("rating-score");

myForm.addEventListener("submit", (event) => {
  //prevent the default form submission behavior
  event.preventDefault();

  review[0].style.display = "block";
  main[0].style.display = "none";
  rating_score.textContent = `You selected ${value} out of 5`;
});

//adding event for every button
for (let i = 1; i <= 5; i++) {
  rate_button[i - 1].addEventListener("click", () => {
    addRating(i);
  });
}

// if the addEventListener function uses parameter used ()=> if not you can directly do it like "click", function );
