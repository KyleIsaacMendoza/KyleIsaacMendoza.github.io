let operator;

function setOperator(operatorParameter) {
  operator = operatorParameter;

  return operator; // if you want the value to stay you need to return it.
}

function compute() {
  let number1 = Number(document.getElementById("number1").value);
  let number2 = Number(document.getElementById("number2").value);
  let result;

  if (operator == "+") {
    result = number1 + number2;
  } else if (operator == "-") {
    result = number1 - number2;
  } else if (operator == "*") {
    result = number1 * number2;
  } else if (operator == "/") {
    result = number1 / number2;
  } else if ((operator = "")) {
    result = `Please click any operator`;
  } else {
    result = `There is something wrong, Please try again!`;
  }

  document.getElementById("result").value = result;
}
