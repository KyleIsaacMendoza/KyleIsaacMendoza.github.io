const share = document.querySelectorAll(".share");

let socials = document.querySelectorAll(".socials");
socials[0].style.display = "none";
let mobile_container = document.querySelectorAll(".mobile__container");
mobile_container[0].style.display = "none";

share[0].addEventListener("click", () => {
  let screenWidth = document.body.clientWidth;

  if (screenWidth >= 800 && socials[0].style.display == "flex") {
    socials[0].style.display = "none";
  } else if (screenWidth >= 800) {
    socials[0].style.display = "flex";
  } else if (screenWidth < 799) {
    let text_profile = document.querySelectorAll(".text__profile");
    text_profile[0].style.display = "none";
    mobile_container[0].style.display = "block";
    let mobile_share = document.querySelectorAll(".mobile__share-button");
    mobile_share[0].addEventListener("click", () => {
      mobile_container[0].style.display = "none";
      text_profile[0].style.display = "flex";
    });
  }
});
