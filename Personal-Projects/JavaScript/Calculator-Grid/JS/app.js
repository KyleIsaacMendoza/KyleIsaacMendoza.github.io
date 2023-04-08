// import * as _function from "./function.js";
import * as _function from "./function.js";

const input = document.getElementsByTagName("input");

// add Numbers

input[5].addEventListener("click", () => {
  _function.addNumber("7");
});

input[6].addEventListener("click", () => {
  _function.addNumber("8");
});

input[7].addEventListener("click", () => {
  _function.addNumber("9");
});

input[9].addEventListener("click", () => {
  _function.addNumber("4");
});

input[10].addEventListener("click", () => {
  _function.addNumber("5");
});

input[11].addEventListener("click", () => {
  _function.addNumber("6");
});

input[13].addEventListener("click", () => {
  _function.addNumber("1");
});

input[14].addEventListener("click", () => {
  _function.addNumber("2");
});

input[15].addEventListener("click", () => {
  _function.addNumber("3");
});
input[18].addEventListener("click", () => {
  _function.addNumber("0");
});

// setOperator & Other function
input[1].addEventListener("click", _function.clearResult);

input[2].addEventListener("click", _function.deleteInput);

input[3].addEventListener("click", () => {
  _function.setOperator("/");
});

input[4].addEventListener("click", () => {
  _function.setOperator("*");
});

input[8].addEventListener("click", () => {
  _function.setOperator("-");
});

input[12].addEventListener("click", () => {
  _function.setOperator("+");
});

input[16].addEventListener("click", _function.calculateResult);

input[17].addEventListener("click", _function.addDecimal);
