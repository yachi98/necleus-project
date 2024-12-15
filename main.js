// const accordionButtons = document.querySelectorAll(".accordion-title");

// accordionButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const content = this.nextElementSibling;

//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   });
// });

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("accordion-title")) {
    const content = e.target.nextElementSibling;

    // Toggle the display property
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  }
});

const menuBtn = document.querySelector(".mobile-menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
  console.log("hi");
  navMenu.classList.toggle("open");
});
