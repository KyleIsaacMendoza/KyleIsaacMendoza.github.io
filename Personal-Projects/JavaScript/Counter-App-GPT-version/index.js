let result = document.getElementById("result");
let count = 0;
function increment() {
  count++;

  result.innerHTML = count;
}

function decrement() {
  count--;

  result.innerHTML = count;
}
function resetNumber() {
  // dont name
  count = 0;

  result.innerHTML = count;
}
