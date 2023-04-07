function calculate() {
  let num1 = Number(document.getElementById("number1").value);
  let num2 = Number(document.getElementById("number2").value);
  let operator = document.getElementById("operator").value;

  let result;

  if (operator == "+") {
    result = num1 + num2;
  } else if (operator == "-") {
    result = num1 - num2;
  } else if (operator == "*" || operator.toUpperCase() == "X") {
    result = num1 * num2;
  } else if (operator == "/") {
    result = num1 / num2;
  } else {
    result = `${operator} does not Exist!`;
  }

  document.getElementById("result").value = result;
}
