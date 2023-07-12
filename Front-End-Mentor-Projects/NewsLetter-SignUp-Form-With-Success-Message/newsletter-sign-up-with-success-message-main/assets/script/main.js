// Email Validation and Showing of Modals

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const dismissBtn = document.querySelector(".dismiss");
  const dialog = document.querySelector(".dialog");

  //   dismiss button on dialog
  dismissBtn.addEventListener("click", () => {
    dialog.close();
  });
  // when submitting the email
  form.addEventListener("submit", (event) => {
    const input = document.querySelector("input");

    const RegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.value.match(RegExp)) {
      let bold = document.querySelector(".user-email");
      bold.innerHTML = input.value;
      dialog.showModal();
    } else {
      let textError = document.querySelector(".text-error");

      textError.style.display = "block";

      input.style.border = "1px solid hsl(4, 100%, 67%)";
      input.style.background = "hsla(4, 100%, 67%, .3)";
      input.style.color = "hsl(4, 100%, 67%)";
    }

    event.preventDefault();
  });
});
