let result = document.getElementById("result");

function clearInput() {
  result.value = "";
}

function deleteInput() {
  result.value = result.value.slice(0, -1);
}

function addNumber(num) {
  result.value += num;
}

function setOperator(operator) {
  if (!result.value.includes(operator)) {
    result.value += operator;
  } //includes() function is to find a certain string on a string.
}

function addDecimal() {
  if (!result.value.includes(".")) {
    result.value += ".";
  } // meaning if you have already decimal this will not add more
}

function compute() {
  result.value = eval(result.value);
}
