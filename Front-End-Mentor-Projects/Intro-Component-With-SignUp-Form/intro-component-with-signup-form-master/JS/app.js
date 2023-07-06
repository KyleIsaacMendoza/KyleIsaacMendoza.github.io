// Things this js will do
// Pop up the error image (background-image) in input
// if oninvalid, using setCustomValidity(new text)
// Also, checks if the email is valid using reg exp
// set the background-image of input into none
// get input using name attribute
//   first.placeholder = "Please insert First Name";

document.addEventListener("DOMContentLoaded", function () {
  //variables declaration
  const first = document.getElementsByName("first_name")[0];
  const last = document.getElementsByName("last_name")[0];
  const email = document.getElementsByName("email")[0];
  const password = document.getElementsByName("password")[0];
  const submit = document.getElementsByName("submit")[0];

  const image_url = "./images/icon-error.svg";

  // for email
  const reg_exp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

  //   for password first lookahead expect to see a digit, and second is alphabet i guess.
  const reg_exp_pass = /^(?=.*\d)(?=.*[a-z]).{6,20}$/;

  //   function to make sure if the user input something and if the user input the input element will change its color from red to green. depends if its corrrect.
  function custom_validation() {
    // if the user input is invalid or empty
    first.oninvalid = () => {
      first.style.backgroundImage = `url('${image_url}')`;
      first.style.borderColor = "red";
      first.setCustomValidity("Please enter first name");
    };
    // if the user input something to textbar
    first.oninput = () => {
      first.setCustomValidity("");
      first.style.borderColor = "var(--pmy-green)";
      first.style.backgroundImage = `none`;
    };

    last.oninvalid = () => {
      last.setCustomValidity("Please enter last name");
      last.style.backgroundImage = `url('${image_url}')`;
      last.style.borderColor = "red";
    };
    last.oninput = () => {
      last.setCustomValidity("");
      last.style.borderColor = "var(--pmy-green)";
      last.style.backgroundImage = `none`;
    };

    email.oninvalid = () => {
      if ((email.value = "")) {
        email.setCustomValidity("Please enter email");
      } else if (!email.value.match(reg_exp)) {
        email.setCustomValidity("Please enter a valid email");
      }

      email.style.backgroundImage = `url('${image_url}')`;
      email.style.borderColor = "red";
    };
    email.oninput = () => {
      if (email.value.match(reg_exp)) {
        email.setCustomValidity("");
      }

      email.style.borderColor = "var(--pmy-green)";
      email.style.backgroundImage = `none`;
    };

    password.oninvalid = () => {
      password.style.backgroundImage = `url('${image_url}')`;
      password.style.borderColor = "red";
      //   check if the invalid error is because of empty string
      if (password.value == "") {
        password.setCustomValidity("Please insert your password");
      }
      //or didnt match the email reg exp
      else if (!password.value.match(reg_exp_pass)) {
        password.setCustomValidity(
          "Password should have 6 to 20 characters and digits"
        );
      }
    };

    password.oninput = () => {
      // if i input match with regular expression
      // clear the custom validity.
      //if i dont i will be stuck on oninvalid pop up that i need to insert email.

      if (password.value.match(reg_exp_pass)) {
        password.setCustomValidity("");
      }
      password.style.borderColor = "var(--pmy-green)";
      password.style.backgroundImage = `none`;
    };
  }

  //  validate form
  submit.addEventListener("click", () => {
    custom_validation();
    validate_email();
  });
});
