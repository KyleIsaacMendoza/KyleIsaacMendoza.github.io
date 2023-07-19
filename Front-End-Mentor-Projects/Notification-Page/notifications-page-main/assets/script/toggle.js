document.addEventListener("DOMContentLoaded", function () {
  // function to remove the read dot and unread notifs
  function toggle() {
    const unreadBox = document.querySelectorAll(".unread-box");
    const unreadNotif = document.querySelectorAll(".unread");
    const notificationCount = document.querySelector(".count");
    for (var i = 0; i < unreadBox.length; i++) {
      unreadBox[i].classList.toggle("read-box");
      unreadNotif[i].classList.toggle("read");
    }
    notificationCount.textContent = "0";
  }

  //   button
  document.querySelector("button").addEventListener("click", toggle);
});
