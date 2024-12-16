const accordionButtons = document.querySelectorAll(".accordion-btn");
const accordions = document.querySelectorAll(".accordion-content");
const accordionButtonIds = [
  "accordion-btn-1",
  "accordion-btn-2",
  "accordion-btn-3",
];

accordionButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const accordionButtonId = accordionButtonIds.find((id) => id === button.id);
    let accordion;
    if (accordionButtonId === "accordion-btn-1") {
      accordion = document.querySelector("#accordion1");
    }
    if (accordionButtonId === "accordion-btn-2") {
      accordion = document.querySelector("#accordion2");
    }
    if (accordionButtonId === "accordion-btn-3") {
      accordion = document.querySelector("#accordion3");
    }

    if (accordion.style.display === "block") {
      accordion.style.display = "none";
    } else {
      accordion.style.display = "block";
    }
  });
});

const menuBtn = document.querySelector(".mobile-menu-btn");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");

menuBtn.addEventListener("click", () => {
  mobileNavMenu.classList.toggle("opened");
});
