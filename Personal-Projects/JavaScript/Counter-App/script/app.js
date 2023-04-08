//import

import { increaseCount, decreaseCount, reset } from "./functions.js";

let input = document.getElementsByTagName("input");

//Adding AddEventListener to all inputs and
for (let i = 0; i < 3; i++) {
  //case
  switch (i) {
    case 0:
      input[i].addEventListener("click", decreaseCount);
      break;

    case 1:
      input[i].addEventListener("click", reset);
      break;

    case 2:
      input[i].addEventListener("click", increaseCount);
      break;

    default:
  }
}

// using if else if
// if (i == 0) {
//     input[i].addEventListener("click", decreaseCount);
//   } else if (i == 1) {
//     input[i].addEventListener("click", reset);
//   } else if (i == 2) {
//     input[i].addEventListener("click", increaseCount);
//   }
