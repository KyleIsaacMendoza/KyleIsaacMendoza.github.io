//declaration
export let value = 0;
export const result = document.getElementById("result");

export const review = document.getElementsByClassName("review-container");
review[0].style.display = "none"; // to make the review container invisible

//to save the rating value
export function addRating(rate) {
  value = rate;
}
