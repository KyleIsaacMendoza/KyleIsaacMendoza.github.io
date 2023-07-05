document.addEventListener("DOMContentLoaded", function () {
  function test() {
    alert("Hello");
  }

  function validate_form() {
    //regular expresion to see if an email is valid
    const regular_exp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    const email = document.querySelector(".email").value;
    const text = document.querySelector(".error-text");
    const icon = document.querySelector(".error-img");
    const input_container = document.querySelector(".input-container");

    if (email === "") {
      icon.style = "display: block";
      text.style = "display: block";
      input_container.style = "border-color: red";
      text.textContent = "Please insert Email!";
    } else if (!email.match(regular_exp)) {
      icon.style = "display: block";
      text.style = "display: block";
      input_container.style = "border-color: red";
      text.textContent = "Please insert valid Email!";
    } else {
      icon.style = "display: none";
      text.style = "display: none";
      input_container.style = "border-color: var(--pmy-desaturated-red)";
    }
  }

  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    validate_form();
  });
});
