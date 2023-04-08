let result = document.getElementById("result");
// just to declare and use it in function

export function clearResult() {
  result.value = "";
}
export function deleteInput() {
  result.value = result.value.slice(0, -1);
}

export function addNumber(number) {
  result.value += number;
}

export function setOperator(operator) {
  if (!result.value.includes(operator)) {
    result.value += operator;
  }
}

export function addDecimal() {
  const decimal_point = ".";

  result.value += decimal_point;
}

export function calculateResult() {
  result.value = eval(result.value); // result value = eval(result value)
}

export function test() {
  alert("test!");
}
