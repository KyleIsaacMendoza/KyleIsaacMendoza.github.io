let result = document.getElementById("result");

let number = +result.textContent;
//converting result.context into number using +

//to Increment
export function increaseCount() {
  ++number;

  result.textContent = number;
}

//to decrement
export function decreaseCount() {
  --number;
  result.textContent = number;
}

//to RESET
export function reset() {
  number = 0;

  result.textContent = number;
}
