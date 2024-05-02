// hamburger on click
const hamburgerButton = document.querySelector(".hamburger");
const hamburgerList = document.querySelector(".hamburgerList");

hamburgerButton.addEventListener("click", () => {
  hamburgerList.classList.toggle("active");
});

document.addEventListener("click", function (e) {
  if (
    !hamburgerButton.contains(e.target) &&
    !hamburgerList.contains(e.target)
  ) {
    hamburgerList.classList.remove("active");
  }
});

const hamburgerLinks = document.querySelectorAll(".hamburgerList a");

hamburgerLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerList.classList.remove("active");
  });
});
