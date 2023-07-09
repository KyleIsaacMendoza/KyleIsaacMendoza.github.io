document.addEventListener("DOMContentLoaded", function () {
  // declaration of variables
  const input = document.querySelector("input");
  const form = document.querySelector("form");
  const text_error = document.querySelector(".text-error");
  const reg_exp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  //   oninput and setCustomvalidity
  // on submit
  form.addEventListener("submit", (event) => {
    if (!input.value.match(reg_exp)) {
      text_error.textContent = "Please provide a valid email address";
      input.style.border = "1px solid var(--scnd-light-red)";
    } else {
      text_error.textContent = "";
      input.style.border = "1px solid var(--pmy-blue)";
      console.log("You've submitted a valid email!");
    }

    event.preventDefault();
  });
});
