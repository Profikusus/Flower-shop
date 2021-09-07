let navMenu = document.querySelector(".nav-menu");
let mainMenu = document.querySelector(".menu");

navMenu.addEventListener("click", function () {
  navMenu.classList.toggle("active-menu");
  if (navMenu.classList.contains("active-menu")) {
    mainMenu.classList.add("active-menu");
  } else {
    mainMenu.classList.remove("active-menu");
  }
});

$(".parallax-window").parallax({ imageSrc: "./images/IMG_4241_.jpg" });
